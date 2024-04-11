import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  devServer: {
    proxy: {
      "/igGetID": {
        target: "https://api.instagram.com",
        changeOrigin: true,
        secure: false,
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


