// 预声明各种路由
import { Navigate } from 'react-router-dom'
import loadable from '@loadable/component'
import Error from '@/pages/error'
import Login from '@/pages/login'
import { Spin } from 'antd'

type LoadingComponent = () => Promise<React.ReactNode>

export interface RouterInfo {
  components: LoadingComponent | React.ReactNode // 页面
  path: string // 访问路径  使用路径进行比较
  key?: any // 确认唯一值
  title?: string | any // 标题
  full?: boolean // 是否全屏
  keepAlive?: string | any
  [name: string]: any
}

const fellbackStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
}

// 常用路由 不需要权限的路由
const constRouter: RouterInfo[] = [
  {
    path: '/login',
    key: 'login',
    full: true,
    components: <Login />,
  },
  {
    path: '/a3',
    key: 'a3',
    full: true,
    components: (
      <Error status="403" errTitle="403" subTitle="Sorry, you don't have access to this page." />
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
    // 菜单
    path: '/power/user',
    key: 'powerUser',
    components: () => import('@/pages/a2'),
  },
]

auto.forEach((item) => {
  const { ...anyProps } = item
  const Com = loadable(item.components, {
    fallback: <Spin style={fellbackStyle} tip="页面加载中...." />,
  })
  const info = { ...anyProps, components: <Com /> }
  asyncRouter.push(info)
})

export default { asyncRouter, constRouter }
