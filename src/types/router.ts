type LoadingComponent = () => Promise<React.ReactNode>

// 声明的路由信息
declare type RouterInfo = {
  components: LoadingComponent | React.ReactNode // 页面
  key: any // 确认唯一值
  path?: string // 访问路径
  label?: string | any // 标题
  full?: boolean // 是否全屏
  keepAlive?: string | any
  [name: string]: any
}
