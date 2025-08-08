import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr({
      exportType: "named",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
