// 展示  等待页 || 登录页 || 正式路由页面
import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfoAction } from '@/store/action'
import { getLocalUser, getToken } from '@/utils'
// import { getLocalUser, getToken } from '@/store/hooks/user'
import { Spin } from 'antd'
import RouterList from './index'

import Login from '@/pages/login'

function AppRouter() {
  console.log('appRouter---')
  const [loading, setLoad] = useState(true)
  const token = useSelector((state: State) => state.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('执行useEffect', token)
    setLoad(false)
  }, [token, dispatch])

  if (loading)
    return (
      <Spin size="large" tip="Loading...">
        <div className="app" />
      </Spin>
    )
  if (!token) return <Login />

  return (
    <HashRouter>
      <RouterList />
    </HashRouter>
  )
}
export default AppRouter
