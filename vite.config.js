import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("react") || id.includes("scheduler")) {
            return "react-vendor";
          }

          if (id.includes("@radix-ui") || id.includes("lucide-react")) {
            return "ui-vendor";
          }

          return "vendor";
        }
      }
    }
  }
});
