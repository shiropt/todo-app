import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    react({
      plugins: [
        [
          "@swc/plugin-styled-components",
          { displayName: true, ssr: false, fileName: false, pure: true },
        ],
      ],
    }),
    tsconfigPaths(),
  ],
});
