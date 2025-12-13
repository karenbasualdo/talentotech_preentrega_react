import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
    host: '11146f12-e16d-4b1b-afc8-86b11086bfe5-00-3jiiygbbddstt.worf.replit.dev',
    port: 443,
    protocol: 'wss'
    }
  }
})
