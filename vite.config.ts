import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用 HashRouter 所以在静态部署中 SPA 路由能正常工作
  // 如果要用自定义域名，可以改 base
  base: './',
})
