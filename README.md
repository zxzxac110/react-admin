在[react-ant-admin 码云(国内镜像)](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin)基础上自己实现了一遍，融入了自己的风格，方便使用

[react-ant-admin 文档地址](https://z3web.cn/doc-react-ant-admin/)

## 特性

- vitejs: 更快的构建工具，体验极速开发。
- 菜单配置:扁平化数据组织,方便编写,存库,页面菜单,标题,侧边栏,顶部导航栏同步
- 页面懒加载:使用[@loadable/component](https://loadable-components.com/docs/getting-started/)来解决首次打开页面过慢的问题.
- Ajax 请求：restful 规范，自动错误提示，提示可配置；自动打断未完成的请求；
- 权限控制: 根据不用角色的功能类型显示菜单,路由页面拦截.
- 自定义主题，可以自己定义界面颜色。
- 代理转发，解决前端请求跨域问题。
- 路由自动生成，去中心化。

系统提供了一些基础的页面

- 登录页
- 详情页
- 表单页
- 列表页
- 权限管理
- 结果页

## 快速使用

1. 下载本项目到本地

```bash
D:> git clone https://github.com/kongyijilafumi/react-ant-admin.git #github地址 慢
D:> git clone https://gitee.com/kong_yiji_and_lavmi/react-ant-admin.git #码云地址 快
```

2. 切换 vite 分支

```bash
D:\react-ant-admin>git checkout vite
```

3. 安装依赖

```bash
# npm 慢
npm i
# cnpm 国内镜像 快
cnpm i
```

4. 启动

```bash
npm run dev # 默认走代理请求线上接口 https://z3web.cn
```

浏览器打开 `http://localhost:3000` 即可

## 切换 webpack 版本

1. 切换分支

```bash
D:\react-ant-admin>git checkout webpack
```

2. 安装依赖

```bash
D:\react-ant-admin>cnpm i
```

3. 启动

```bash
D:\react-ant-admin>npm run start
```

## 创建一个新的页面

1. 在 src/pages 文件夹下创建一个 test.tsx 文件,代码如下

```js
// 函数组件
export default function Test() {
  return <div>test页面</div>;
}

/**
 * MENU_* 开头信息在 package.json(在webpack分支中) 文件中找到
 * 给 pages 组件追加路由信息
 * export default 组件的原型上添加route信息,或者向外暴露一个 route
 * 会被vite的vite-plugin-react-router-generator插件捕获信息
 */

// 1.被捕获 export default 原型上的route
Test.route={
  [MENU_TITLE] : "test页面",
  [MENU_KEY] : "test",
  [MENU_PATH]: "/test",
  [MENU_LAYOUT]:"FULLSCREEN" // 该页面全屏显示 默认可以不填
}

// 2.被捕获 暴露的route信息  优先级比上面高
export const route = {
  [MENU_TITLE] : "test页面",
  [MENU_KEY] : "test",
  [MENU_PATH]: "/test",
  [MENU_LAYOUT]:"FULLSCREEN" // 该页面全屏显示 默认可以不填
}
```

2. 浏览器访问 `http://localhost:3000/react-ant-admin/test` 即可


## 脚本启动

在完成依赖安装之后,有以下几种启动方式。

- npm run dev

请求接口数据，通过后台返回数据显示项目信息

- npm run "dev:mock"

本地模拟数据，假数据来显示项目信息

- npm run build

普通打包模式。

- npm run preview