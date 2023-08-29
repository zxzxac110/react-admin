// 预声明各种路由
import loadable from '@loadable/component'
import Error from '@/pages/error'
import Login from '@/pages/login'
import Login2 from '@/pages/login/login2'
import { Spin } from 'antd'

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
    path: '/login2',
    key: 'login2',
    full: true,
    title: '登录页2',
    components: <Login2 />,
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
    key: 'role',
    components: () => import('@/pages/role'),
  },
  {
    key: 'error403',
    components: () => import('@/pages/a1/403'),
  },
  {
    key: 'feedback',
    components: () => import('@/pages/a1/feedback'),
  },
  {
    key: 'visitor',
    components: () => import('@/pages/a1/visitor'),
  },
  {
    key: 'detailsPerson',
    components: () => import('@/pages/a1/person'),
  },
  {
    key: 'error404',
    components: () => import('@/pages/a1/404'),
  },
  {
    key: 'details',
    components: () => import('@/pages/a1/details'),
  },
  {
    key: 'result',
    components: () => import('@/pages/a1/result'),
  },
  {
    key: 'statistics',
    components: () => import('@/pages/a1/statistics'),
  },
  {
    key: 'power',
    components: () => import('@/pages/a1/power'),
  },
  {
    key: 'powerMenu',
    components: () => import('@/pages/menu'),
  },
  {
    key: 'setDome',
    components: () => import('@/pages/dome'),
  },
  {
    key: 'error500',
    components: () => import('@/pages/a1/500'),
  },
  {
    key: 'listCard',
    components: () => import('@/pages/a1/card'),
  },
  {
    key: 'icons',
    components: () => import('@/pages/icons'),
  },
  {
    key: 'powerType',
    components: () => import('@/pages/a1/type'),
  },
  {
    key: 'setMenu',
    components: () => import('@/pages/menu'),
  },
]

auto.forEach((item) => {
  const Com = loadable(item.components, {
    fallback: (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Spin size="large"></Spin>
      </div>
    ),
  })
  const info = { ...item, components: <Com /> }
  asyncRouter.push(info)
})

export default { asyncRouter, constRouter }
