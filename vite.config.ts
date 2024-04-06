import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          "@swc/plugin-styled-components",
          { displayName: true, ssr: false, fileName: false, pure: true },
        ],
      ],
    }),
  ],
});
