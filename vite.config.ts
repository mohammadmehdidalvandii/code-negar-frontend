import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve:{
    alias:{
      '@page':'/src/page',
      '@components':'/src/components',
      '@components/modules':'/src/components/modules/',
      '@components/template':'/src/components/template/',
      '@components/Routes':'/src/components/Routes/',
      '@utils':'/src/utils',
      '@hooks':'/src/hooks',
      '@zustand':'/src/zustand',
      '@services':'/src/services'
    }
  }
})
