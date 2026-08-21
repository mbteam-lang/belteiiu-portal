import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_BASE_URL || env.VITE_API_URL || 'http://127.0.0.1:8000';
  let target = apiUrl;
  try {
    target = new URL(apiUrl).origin;
  } catch (e) {
    // fallback if relative URL
  }

  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3001,
      proxy: {
        '/storage': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@mui') || id.includes('@emotion')) {
                return 'vendor-mui';
              }
              if (id.includes('framer-motion') || id.includes('lottie-web') || id.includes('lottie-react')) {
                return 'vendor-motion';
              }
              if (id.includes('lucide-react') || id.includes('react-icons')) {
                return 'vendor-icons';
              }
              if (id.includes('i18next')) {
                return 'vendor-i18n';
              }
              if (id.includes('pdfjs-dist') || id.includes('react-pdf')) {
                return 'vendor-pdf';
              }
              if (id.includes('@videojs') || id.includes('video.js') || id.includes('react-player')) {
                return 'vendor-media';
              }
            }
          },
        },
      },
    },
  };
});
