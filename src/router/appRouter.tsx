// 展示  等待页 || 登录页 || 正式路由页面
import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import RouterList from './index'
import Login from '@/pages/login'
import Login2 from '@/pages/login/login2'
import { ConfigProvider } from 'antd'
import locale from 'antd/es/locale/zh_CN'
import themeList from '@/theme/config'
import { useStateTheme, useStateUserInfo, useDispatchUser } from '@/store/hooks'
import '@/theme/index.less'

function AppRouter() {
  console.log('AppRouter')
  const defaultSelectedKeys = useStateTheme()
  const userInfo = useStateUserInfo()
  const { getUserData } = useDispatchUser()
  const [theme, setTheme] = useState(themeList[defaultSelectedKeys as Theme])
  const [loading, setLoad] = useState(true)
  const token = useSelector((state: State) => state.user.token)

  // 登录页token变更重新执行
  useEffect(() => {
    setLoad(false)
    if (token && !userInfo) {
      getUserData()
    }
  }, [token])

  // 转化主题
  useEffect(() => {
    // 变变量放到:root下 全局使用
    const theme = themeList[defaultSelectedKeys as Theme]
    let styleHtml = ':root{'
    for (const key in theme) {
      const key2 =
        '--' +
        key
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase()
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
      styleHtml += key2 + ':' + theme[key] + ';'
    }
    let styleTag = document.getElementById('theme-style')
    if (styleTag) {
      styleTag.innerHTML = styleHtml + '}'
    } else {
      styleTag = document.createElement('style')
      styleTag.id = 'theme-style'
      styleTag.innerHTML = styleHtml + '}'
      document.head.appendChild(styleTag)
    }
    setTheme(theme)
  }, [defaultSelectedKeys])
  // 第一次进入页面loading
  if (loading) {
    return (
      <Spin size="large" tip="Loading...">
        <div className="app" />
      </Spin>
    )
  }

  function getLogin() {
    const com = [<Login2></Login2>, <Login></Login>]
    return com[Math.floor(Math.random() * com.length)]
  }

  return (
    <ConfigProvider locale={locale} theme={{ token: theme }}>
      <div className={defaultSelectedKeys + ' app'}>
        {token ? (
          <HashRouter>
            <RouterList />
          </HashRouter>
        ) : (
          getLogin()
        )}
      </div>
    </ConfigProvider>
  )
}
export default AppRouter
