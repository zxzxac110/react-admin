// 路由拦截
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
  [key: string]: any
}

// 路由拦截
// 菜单 组件 标题 路径 key
function Intercept({ components, title, path: pagePath, pageKey }: Props) {
  const [pageInit, setPageInit] = useState(false)
  const location = useLocation()
  // const {  stateAddOpenedMenu, stateSetCurrentPath } = useDispatchMenu()
  const currentPath = useMemo(() => {
    const { pathname, search } = location
    return pathname + search
  }, [location])
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
    // stateAddOpenedMenu({ key: pageKey, path: currentPath, title })
  }, [title])

  const init = useCallback(() => {
    setCurrentPageInfo()
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

  return components
}
export default Intercept
