import { useCallback, useEffect, useMemo, useState } from 'react'
import { getMenuParentKey } from '@/utils'
import Error from '@/pages/error'
import { useLocation } from 'react-router-dom'

const scrollPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

interface Props {
  path?: string
  title?: string
  pageKey: string
  menuList: Array<MenuItem>
  [key: string]: any
}

// 路由拦截
// 菜单 组件 标题 路径 key
function Intercept({ menuList, components, title, path: pagePath, pageKey }: Props) {
  console.log('Intercept', pageKey, menuList, components, title, pagePath)
  const [pageInit, setPageInit] = useState(false)
  const location = useLocation()
  // const {  stateAddOpenedMenu, stateSetCurrentPath } = useDispatchMenu()
  const currentPath = useMemo(() => {
    const { pathname, search } = location
    console.log(location)
    return pathname + search
  }, [location])
  console.log(currentPath)
  // 监听 location 改变
  const onPathChange = useCallback(() => {
    console.log('监听 location 改变', title)
    // stateSetCurrentPath(currentPath)
    // stateAddOpenedMenu({ key: pageKey, path: currentPath, title: title || "未设置标题信息" });
  }, [title])

  const setCurrentPageInfo = useCallback(() => {
    if (!title) {
      return
    }
    document.title = title
    // stateSetSelectMenuKey([String(pageKey)])
    // let openkey = getMenuParentKey(menuList, pageKey)
    // stateAddOpenedMenu({ key: pageKey, path: currentPath, title })
  }, [title])

  const init = useCallback(() => {
    setCurrentPageInfo()
    console.log(title)
    scrollPage()
  }, [setCurrentPageInfo])

  useEffect(() => {
    if (init && !pageInit) {
      init()
      setPageInit(true)
    }
  }, [init, pageInit])

  useEffect(() => {
    if (pageInit) {
      onPathChange()
    }
  }, [onPathChange, pageInit])

  const hasPath = !menuList.find((m) => (m.parentPath || '') + m.path === pagePath)

  if (hasPath && pagePath !== '/' && pagePath !== '*') {
    return (
      <Error
        status="403"
        errTitle="权限不够"
        subTitle="Sorry, you are not authorized to access this page."
      />
    )
  }

  return components
}
export default Intercept
