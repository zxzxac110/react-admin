// 预声明各种路由
import { Navigate } from 'react-router-dom'
import loadable from '@loadable/component'
import Error from '@/pages/error'
import { Spin } from 'antd'

type LoadingComponent = () => Promise<React.ReactNode>

export interface RouterInfo {
  components: LoadingComponent | React.ReactNode // 页面 
  path: string  // 访问路径  使用路径进行比较
  key?: any // 确认唯一值
  title?: string | any // 标题
  keepAlive?: string | any
  [name: string]: any
}

// 常用路由 不需要权限的路由
const constRouter: RouterInfo[] = [
  // 常用路由
  {
    path: '/',
    key: '',
    components: <Navigate to="/a3" replace />,
  },
  {
    path: '/result/404',
    components: <Error />,
  },
  {
    path: '/result/403',
    components: (
      <Error status="403" errTitle="403" subTitle="Sorry, you don't have access to this page." />
    ),
  },
  {
    path: '/result/500',
    components: (
      <Error status="500" errTitle="500" subTitle="Sorry, the server is reporting an error." />
    ),
  },
  {
    path: '*',
    title: '页面不存在',
    key: '404',
    components: <Error />,
  },
]

// 异步路由 需要权限的路由 一般根据菜单进行变化
const asyncRouter: RouterInfo[] = []

// 异步路由处理前格式
const auto = [ 
  {
    path: '/power/user',
    key: 'powerUser',
    components: () => import('@/pages/a2'),
  },
]

const fellbackStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
}

auto.forEach((item) => {
  const { ...anyProps } = item
  const Com = loadable(item.components, {
    fallback: <Spin style={fellbackStyle} tip="页面加载中...." />,
  })
  const info = { ...anyProps, components: <Com /> }
  asyncRouter.push(info)
})

const localRouter: RouterInfo[] = [...asyncRouter, ...constRouter]

export default localRouter
