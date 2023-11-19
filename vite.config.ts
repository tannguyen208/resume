import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), viteCommonjs(), tsconfigPaths()],
  publicDir: 'assets',
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs()],
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
