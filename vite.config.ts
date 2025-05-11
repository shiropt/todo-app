import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { version } from "./package.json";


export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    react({
      plugins: [],
    }),
    tsconfigPaths(),
  ],
  define: {
    "process.env.VERSION": JSON.stringify(version),
  },
});
