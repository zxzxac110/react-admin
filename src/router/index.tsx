// 获取菜单 生成路由
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Intercept from './intercept'
import { genRouterList, createMenuTree, getRedirect } from '@/utils/route'
import { getMenuList } from '@/api'
import { useDispatchMenu } from '@/store/hooks'
import Layout from '@/pages/layout'

const Router = () => {
  console.log('RouterRouter')
  const { stateSetMenuList } = useDispatchMenu() // 设置右侧菜单
  const [mergeRouterList, setMergeList] = useState<React.ReactElement[]>([]) // 即将生成的路由列表

  // 监听 菜单变化  路由跟着变化
  useEffect(() => {
    if (stateSetMenuList && typeof stateSetMenuList === 'function') {
      getMenuList({}).then((e) => {
        const routers = genRouter(e.data)
        setMergeList(routers)
        // const formatList = createMenuTree(e.data) // 一维转树形
        const formatList = e.data
        stateSetMenuList(formatList)
      })
    }
  }, [stateSetMenuList])

  // 生成路由
  const genRouter = (mergeRouterList: any[]): React.ReactElement[] => {
    if (mergeRouterList.length) {
      const routerList = genRouterList(mergeRouterList) // 即将渲染路由的list
      const redirect = getRedirect(routerList) // 重定向，取匹配成功的第一个
      
      const arr: Record<string, any[]> = {
        full: [],
        noFull: [],
      }
      routerList.forEach((e) => {
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
