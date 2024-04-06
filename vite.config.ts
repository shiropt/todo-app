// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // @vitejs/plugin-reactを@vitejs/plugin-react-swcに変更

export default defineConfig({
  plugins: [
    react({
    plugins: [["@swc/plugin-styled-components", {displayName: true, ssr: false,fileName:false ,pure:true}]],
    }),
  ],
});