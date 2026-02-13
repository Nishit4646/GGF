import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5d2d012b8b35.ngrok-free.app']  // 👈 add your ngrok host here
  }
})
