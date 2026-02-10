import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyUI",
      fileName: "my-ui-library",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: "my-ui-library.[ext]",
      },
    },
  },
});
