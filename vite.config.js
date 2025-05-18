import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const target = process.env.BUILD_TARGET || 'electron'

export default defineConfig({
  base: target === 'gh-pages' ? '/TritonHacks2025/' : './',
  build: {
    outDir: target === 'gh-pages' ? 'dist' : 'electron/build'
  },
  plugins: [svelte(), tailwindcss()]
})
