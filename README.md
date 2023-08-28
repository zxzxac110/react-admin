在 [react-ant-admin 码云(国内镜像)](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin) 基础上自己实现了一遍，融入了自己的风格，方便使用

## 特性

- vitejs: 更快的构建工具，体验极速开发。
- 菜单配置
- 页面懒加载:使用[@loadable/component](https://loadable-components.com/docs/getting-started/)来解决首次打开页面过慢的问题.
- 权限控制: 根据不用角色的功能类型显示菜单,路由页面拦截.
- 主题切换。
- 代理转发，解决前端请求跨域问题。

## 使用

1. 安装依赖

```bash
npm i
cnpm i
```

2. 启动

```bash
npm run dev # 默认走代理请求测试接口
npm run dev_mock  # 本地模拟数据
npm run build  # 生产环境模式。
npm run build_dev  # 测试环境模式。
npm run build_mock  # 测试模拟数据。
```

####

npm install @loadable/component -D 动态加载

### todo

keepAlive // 没有好的方法
