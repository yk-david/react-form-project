import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd88a76e9-6161-4593-a463-9f372ee529bd-00-18l7mqwtq08m5.sisko.replit.dev'
    ]
  }
})
