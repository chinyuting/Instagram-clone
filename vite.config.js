import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      "/igGetID": {
        target: "https://api.instagram.com",
        changeOrigin: true,
        // secure: false,
        rewrite: (path) => path.replace(/^\/igGetID/, ''),
      },
    },
  },
  base: '/Instagram-Imitation/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})


