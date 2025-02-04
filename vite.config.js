// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si usas React, ajusta según tu stack

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambiar el puerto aquí
  },
});
