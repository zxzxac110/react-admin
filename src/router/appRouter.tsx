// 展示  等待页 || 登录页 || 正式路由页面
import { useEffect, useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfoAction } from '@/store/action'
import { getLocalUser } from '@/utils'
import { Spin } from 'antd'
import RouterList from './index'

import Login from '@/pages/login'

function AppRouter() {
  console.log('appRouter---')
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
      <RouterList />
    </HashRouter>
  )
}
export default AppRouter
