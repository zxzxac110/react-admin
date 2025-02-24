import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), svgr(), createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/svg')],
      // 指定symbolId格式
      symbolId: '[name]'
    })],
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
          target: 'http://api-quickapp.qinbaowan.cn/',
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
