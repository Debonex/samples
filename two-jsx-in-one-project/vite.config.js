import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [react(), vue()],
  build: {
    rollupOptions: {
      input: {
        vue: resolve(__dirname, "vue/index.html"),
        react: resolve(__dirname, "react/index.html"),
      },
    },
  },
});
