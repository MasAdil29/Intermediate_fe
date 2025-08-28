import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve("server", "node-build.js"),
      name: "server",
      fileName: "node-build",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["express", "cors", "dotenv"],
    },
    outDir: "dist/server",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@shared": resolve("./shared"),
    },
  },
});
