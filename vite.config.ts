import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Chakra UI system
          "chakra-vendor": ["@chakra-ui/react", "@emotion/react"],
          // Supabase
          "supabase-vendor": ["@supabase/supabase-js"],
          // Icons and theme
          "ui-vendor": ["react-icons", "next-themes"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
