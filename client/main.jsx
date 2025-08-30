import "./global.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store.js";
import App from "./App.jsx";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root not found");

const root = globalThis.__chill_root || createRoot(container);
globalThis.__chill_root = root;
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
