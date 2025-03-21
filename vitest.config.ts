import { defineConfig } from "vitest/config";
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["./src/__tests__/**/*.spec.ts"],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
