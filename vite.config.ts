import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { GuiiAIDevToolsVitePlugin } from '@guiiai/core'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    GuiiAIDevToolsVitePlugin(), // ai
  ],
})
