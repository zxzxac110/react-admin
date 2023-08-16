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
    title: '登录页',
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
    path: 'power/user',
    key: 'powerUser',
    components: () => import('@/pages/a1/user'),
  },
  {
    path: 'result/403',
    key: 'error403',
    components: () => import('@/pages/a1/403'),
  },
  {
    path: 'statistics/feedback',
    key: 'feedback',
    components: () => import('@/pages/a1/feedback'),
  },
  {
    path: 'statistics/visitor',
    key: 'visitor',
    components: () => import('@/pages/a1/visitor'),
  },
  {
    path: 'details/person',
    key: 'detailsPerson',
    components: () => import('@/pages/a1/person'),
  },
  {
    path: 'result/404',
    key: 'error404',
    components: () => import('@/pages/a1/404'),
  },
  {
    path: '/details',
    key: 'details',
    components: () => import('@/pages/a1/details'),
  },
  {
    path: '/form',
    key: 'from',
    components: () => import('@/pages/a1/form'),
  },
  {
    path: '/result',
    key: 'result',
    components: () => import('@/pages/a1/result'),
  },
  {
    path: '/statistics',
    key: 'statistics',
    components: () => import('@/pages/a1/statistics'),
  },
  {
    path: '/power',
    key: 'power',
    components: () => import('@/pages/a1/power'),
  },
  {
    path: 'power/menu',
    key: 'powerMenu',
    components: () => import('@/pages/a1/menu'),
  },

  {
    path: 'result/500',
    key: 'error500',
    components: () => import('@/pages/a1/500'),
  },
  {
    path: 'list/card',
    key: 'listCard',
    components: () => import('@/pages/a1/card'),
  },
  {
    path: 'list/search',
    key: 'listSearch',
    components: () => import('@/pages/a1/search'),
  },
  {
    path: 'from/index',
    key: 'formIndex',
    components: () => import('@/pages/a1/index'),
  },
  {
    path: '/icons',
    key: 'icons',
    components: () => import('@/pages/a1/icons'),
  },
  {
    path: 'power/type',
    key: 'powerType',
    components: () => import('@/pages/a1/type'),
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
// [
//   "icon_locking",
//   "icon_feeding",
//   "icon_addresslist",
//   "icon_github",
//   "icon_close",
//   "icon_edit",
//   "icon_form",
//   "icon_voiceprint",
//   "icon_MTR",
//   "icon_set",
//   "icon_menu",
//   "icon_infopersonal",
//   "icon_privacy_closed",
//   "",
//   "",
//   "",
//   "icon_pen",
//   "icon_setting"
// ]
