import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      input: {
        home: resolve(rootDir, 'index.html'),
        programs: resolve(rootDir, 'programs/index.html'),
        sessionOne: resolve(rootDir, 'programs/session-1/index.html'),
        sessionTwo: resolve(rootDir, 'programs/session-2/index.html'),
        whoWeServe: resolve(rootDir, 'who-we-serve/index.html'),
        partners: resolve(rootDir, 'partners/index.html'),
        about: resolve(rootDir, 'about/index.html'),
        notFound: resolve(rootDir, '404.html')
      }
    }
  }
});
