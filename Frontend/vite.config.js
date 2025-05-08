import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Enable Tailwind CSS 
  ],
  server: {
    port: 3000, // Dev server will run on localhost:3000
  },
})