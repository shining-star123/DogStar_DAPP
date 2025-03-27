import * as path from 'path'

import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [
    react(),
    EnvironmentPlugin(['REACT_APP_TEXT']),
    federation({
      name: 'dogstar-mylab',
      filename: 'remoteEntry.js',
      remotes: {
        dogstar_league: 'http://localhost:3004/remoteEntry.js',
      },
      exposes: {
        './MyLab': './src/App.tsx',
        './components': './src/components/index.ts',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  publicDir: 'public',
  server: {
    host: true,
    port: 3005,
  },
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/common': path.resolve(__dirname, '../src/common'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
    },
  },
})
