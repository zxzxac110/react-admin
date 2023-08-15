// 获取菜单 生成路由
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import localRouter, { RouterInfo } from './list'
import Intercept from './intercept'
import { getMenus, formatMenu } from '@/utils'
import { useDispatchMenu } from '@/store/hooks'
import Layout from '@/pages/layout'

const Router = () => {
  console.log('RouterRouterRouterRouterRouterRouterRouterRouter')
  const { stateSetMenuList } = useDispatchMenu() // 设置右侧菜单
  const [mergeRouterList, setMergeList] = useState<React.ReactElement[]>([]) // 即将生成的路由列表

  // 监听 菜单变化  路由跟着变化
  useEffect(() => {
    if (stateSetMenuList && typeof stateSetMenuList === 'function') {
      getMenus().then((list) => {
        if (list && list.length) {
          const formatList = formatMenu(list)
          console.log('formatList右侧菜单列表', formatList)
          // 生成路由
          const routers = genRouter(list)
          stateSetMenuList(formatList)
          setMergeList(routers)
          console.log('即将生成的路由列表', routers)
        }
      })
    }
  }, [stateSetMenuList])

  // 生成路由
  const genRouter = (mergeRouterList: any[]): React.ReactElement[] => {
    if (mergeRouterList.length) {
      const arr: Record<string, any[]> = {
        full: [],
        noFull: [],
      }
      let redirect = '' // 重定向，取匹配成功的第一个
      const menuMap: Record<string, RouterInfo> = {} // 后端菜单map
      const matchRouter: RouterInfo[] = [...localRouter.constRouter] // 常用 + 匹配成功的异步路由
      mergeRouterList.forEach((e) => {
        menuMap[e.key] = {
          ...e,
          parentPath: '/' + e.parentKey,
        }
      })
      localRouter.asyncRouter.forEach((e: RouterInfo) => {
        if (menuMap[e.key]) {
          redirect = redirect || e.path
          matchRouter.push({ ...menuMap[e.key], ...e }) // 添加菜单的属性和本地路由的属性
        }
      })

      matchRouter.forEach((e) => {
        const { key, path } = e
        const com = <Route key={key} path={path} element={<Intercept {...e} pageKey={key} />} />
        if (e.full) {
          arr.full.push(com)
        } else {
          arr.noFull.push(com)
        }
      })

      return [
        <Route key="index" path={'/'} element={<Navigate to={redirect} />} />,
        <Route key="/" element={<Layout />}>
          {...arr.noFull}
        </Route>,
        ...arr.full,
      ]
    }
    return []
  }

  return <Routes>{mergeRouterList}</Routes>
}

export default Router
