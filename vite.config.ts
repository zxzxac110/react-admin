import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: process.env.OUT_DIR,
    },
    server: {
      open: true, // 字段打开
      port: 5173, // 端口号
      proxy: {
        '/api': {
          target: "https://z3web.cn",
          // target: 'http://quanta-api.qinbaowan.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
      hmr: {
        overlay: false // 屏蔽服务器报错
      },
    },
  }
})
