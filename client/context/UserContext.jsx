import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEYS = {
  users: "chill_users",
  currentUser: "chill_current_user",
};

const defaultContext = {
  users: [],
  currentUser: null,
  register: (_username, _password) => ({
    ok: false,
    message: "Not implemented",
  }),
  login: (_username, _password) => ({ ok: false, message: "Not implemented" }),
  logout: () => {},
  removeUser: (_username) => ({ ok: false, message: "Not implemented" }),
};

const UserContext = createContext(defaultContext);

function readUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.users);
    return Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

function readCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.currentUser);
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => readUsers());
  const [currentUser, setCurrentUser] = useState(() => readCurrentUser());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(currentUser));
  }, [currentUser]);

  const register = useCallback(
    (username, password) => {
      const normalized = String(username || "").trim();
      if (!normalized || !password) {
        return { ok: false, message: "Username dan kata sandi wajib diisi" };
      }
      const exists = users.some(
        (u) => u.username.toLowerCase() === normalized.toLowerCase(),
      );
      if (exists) {
        return { ok: false, message: "Username sudah digunakan" };
      }
      const user = { username: normalized, password: String(password) };
      setUsers((prev) => [user, ...prev]);
      return { ok: true, message: "Pendaftaran berhasil", user };
    },
    [users],
  );

  const login = useCallback(
    (username, password) => {
      const normalized = String(username || "").trim();
      const found = users.find(
        (u) =>
          u.username.toLowerCase() === normalized.toLowerCase() &&
          u.password === String(password),
      );
      if (!found) {
        return { ok: false, message: "Username atau kata sandi salah" };
      }
      setCurrentUser({ username: found.username });
      return {
        ok: true,
        message: "Berhasil masuk",
        user: { username: found.username },
      };
    },
    [users],
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const removeUser = useCallback(
    (username) => {
      const normalized = String(username || "")
        .trim()
        .toLowerCase();
      const exists = users.some((u) => u.username.toLowerCase() === normalized);
      if (!exists) {
        return { ok: false, message: "Pengguna tidak ditemukan" };
      }
      setUsers((prev) =>
        prev.filter((u) => u.username.toLowerCase() !== normalized),
      );
      setCurrentUser((prev) =>
        prev && prev.username.toLowerCase() === normalized ? null : prev,
      );
      return { ok: true, message: "Pengguna dihapus" };
    },
    [users],
  );

  const value = useMemo(
    () => ({ users, currentUser, register, login, logout, removeUser }),
    [users, currentUser, register, login, logout, removeUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
  return useContext(UserContext);
}
