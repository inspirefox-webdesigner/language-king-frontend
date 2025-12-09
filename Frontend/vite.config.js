import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/language-king-frontend/",  // 🔥 EXACT repo name
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: ""  // Windows error fix
  }
})
