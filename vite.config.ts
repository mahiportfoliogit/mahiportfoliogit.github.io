import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // USER GitHub Pages
  base: "/",

  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
