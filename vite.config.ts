import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/react-mangosteen-1-preview/',
  plugins: [
    react(),
  ],
  server: {
    host: true
  },
  resolve: {
    // 开启 Vite 8 的原生 tsconfig 路径解析支持
    tsconfigPaths: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
