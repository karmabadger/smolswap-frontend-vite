import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import polyfillNode from 'rollup-plugin-polyfill-node'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    plugins: [
      // polyfillNode(),
    ],
  },
  define: {
    global: {
      "global": "window"
    },
    "process.env": {}
  },
  plugins: [
    react(),
    // polyfillNode()
  ],
  optimizeDeps: {
    allowNodeBuiltins: [],
    exclude: [
      '@myetherwallet/mewconnect-web-client'
    ], // <- modules that needs shimming have to be excluded from dep optimization
  },
  build: {
    rollupOptions: {
      plugins: [
        // polyfillNode(),
      ],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
