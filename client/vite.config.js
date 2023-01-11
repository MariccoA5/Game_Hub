import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // vite uses this as a prefix for href and src URLs
  base: '/static/',
  build: {
    // where vite puts the bundled application
    outDir: '../server/base/static',

    // delete old build when creating new
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()]
})