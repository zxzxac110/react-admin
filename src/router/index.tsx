import { useEffect, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import localRouter, { RouterInfo } from './list'
import Intercept from './intercept'
import { getMenus, formatMenu, reduceMenuList } from '@/utils'
import { useDispatchMenu } from '@/store/hooks'

const Router = () => {
  console.log('RouterRouterRouterRouterRouterRouterRouterRouter')
  const { stateSetMenuList } = useDispatchMenu() // 设置右侧菜单
  const [mergeRouterList, setMergeList] = useState<RouterInfo[]>([]) // 最终路由
  const [ajaxUserMenuList, setAjaxUserMenuList] = useState<MenuList>([]) // 网络请求回来的 路由列表

  // 监听 菜单变化  路由跟着变化
  useEffect(() => {
    if (stateSetMenuList && typeof stateSetMenuList === 'function') {
      getMenus().then((list) => {
        const formatList = formatMenu(list)
        console.log('formatList', formatList)
        const userMenus = reduceMenuList(formatList)
        console.log('userMenus', userMenus)
        // 把请求的数据 和 本地pages页面暴露出的路由列表合并
        const routers = localRouter.map((router) => {
          const find = userMenus.find((i) => (i.parentPath || '') + i.path === router.path)
          if (find) {
            router = { ...find, ...router } // 本地 优先 接口结果
          } else {
            router.key = router.path
          }
          return router
        })
        if (list && list.length) {
          stateSetMenuList(formatList)
          setAjaxUserMenuList(userMenus)
          setMergeList(routers)
          console.log('最终路由', routers)
        }
      })
    }
  }, [stateSetMenuList])

  const routerBody = useMemo(() => {
    // 监听 本地路由列表   同时存在长度大于1时 渲染路由组件
    if (mergeRouterList.length) {
      return mergeRouterList.map((item) => {
        const { key, path } = item
        return (
          <Route
            key={key}
            path={path}
            element={<Intercept {...item} menuList={ajaxUserMenuList} pageKey={key} />}
          />
        )
      })
    }
  }, [ajaxUserMenuList, mergeRouterList])

  return <Routes>{routerBody}</Routes>
}

export default Router
