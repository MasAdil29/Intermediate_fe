import { Button } from "@/components/ui/button";

export default function UserList({ users, onRemove }) {
  if (!Array.isArray(users) || users.length === 0) {
    return (
      <div className="mt-6 rounded-xl border border-chill-border p-4 text-chill-secondary text-sm font-lato">
        Belum ada pengguna terdaftar.
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-chill-border overflow-hidden">
      <div className="bg-chill-paper/30 px-4 py-3 border-b border-chill-border">
        <h3 className="text-white font-lato font-semibold">Daftar Pengguna</h3>
      </div>
      <ul className="divide-y divide-chill-border">
        {users.map((u) => (
          <li key={u.username} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-white font-lato">{u.username}</p>
              <p className="text-xs text-chill-secondary font-lato">Tersimpan di memori lokal</p>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-chill-border text-white hover:bg-white/10"
              onClick={() => onRemove(u.username)}
            >
              Hapus
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
