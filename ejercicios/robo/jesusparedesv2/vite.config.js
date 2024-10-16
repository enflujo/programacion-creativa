import { defineConfig } from 'vite';

export default defineConfig({
  base: '/programacion-creativa/jesusparedesv2/robo/',
  server: {
    port: 3000,
  },
  publicDir: 'estaticos',
  build: {
    outDir: 'publico',
    assetsDir: 'estaticos',
    sourcemap: true,
  },
});
