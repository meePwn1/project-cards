import * as path from 'path'

import svg from '@neodx/svg/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    svg({
      fileName: '{name}.{hash:8}.svg',
      group: true,
      metadata: {
        path: 'src/components/ui/icon/sprite.h.ts',
        runtime: {
          size: true,
          viewBox: true,
        },
      },
      output: 'public/sprites',
      root: 'src/components/ui/icon/assets',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
