import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Specify the port
    strictPort: true, // Fail if the port is already in use
    open: true, // Automatically opens the browser
  },
})
