import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'apk-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/apk/') || req.url.startsWith('/app/') || req.url.endsWith('.apk'))) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive');
            res.setHeader('Content-Disposition', 'attachment; filename="touches.apk"');
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

