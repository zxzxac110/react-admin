import { useEffect, useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfoAction } from '@/store/action'
import { getLocalUser } from '@/utils'
import { Spin } from 'antd'

import Layout from '@/pages/a1'
import Board from '@/pages/a2'
import Article from '@/pages/a3'
import NotFound from '@/pages/a4'
import Login from '@/pages/login'

// 路由数组
const routesList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // 增加n个路由对应关系
  {
    path: '*',
    element: <NotFound />,
  },
]

// 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  const element = useRoutes(routesList)
  return element
}

function AppRouter() {
  console.log('appRouter')
  const [loading, setLoad] = useState(true)
  const userInfo = useSelector((state: State) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    // 副作用参数 只有当参数二发送改变才会执行参数1
    console.log('执行useEffect', userInfo)
    if (!userInfo) {
      const localInfo = getLocalUser()
      if (localInfo && localInfo.isLogin === true) {
        dispatch(setUserInfoAction(localInfo))
      }
    }
    setLoad(false)
  }, [userInfo, dispatch])

  if (loading)
    return (
      <Spin size="large" tip="Loading...">
        <div className="app" />
      </Spin>
    )

  if (!userInfo) return <Login />

  return (
    <HashRouter>
      <WrapperRoutes />
    </HashRouter>
  )
}
export default AppRouter
