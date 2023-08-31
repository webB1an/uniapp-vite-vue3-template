import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: [
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
