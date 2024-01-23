import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false
    }),
    dts({
      include: 'src/lib/types.ts',
    })
  ],
  build: {
    lib: {
      entry: 'src/lib/Root.svelte',

      name: 'ChatTutor',
      formats: ['es', 'umd'],
      fileName: (format) => `chat-tutor.${format}.js`
    }
  },
})
