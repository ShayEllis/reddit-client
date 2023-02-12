import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        '/api/request': {
          target: 'https://www.reddit.com/api/v1/access_token',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/request/, '')
        },
        '/api/v1/me': {
          target: 'https://oauth.reddit.com/api/v1/me',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1\/me/, '')
        },
      }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js"
  }
})