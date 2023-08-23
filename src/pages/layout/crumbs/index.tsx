import { useMemo } from 'react'
import { Breadcrumb } from 'antd'
import { useStateMenuList } from '@/store/hooks'
import { useLocation } from 'react-router-dom'
import { getCurrentPageMenuInfo } from '@/utils/menu'

function Crumbs() {
  const menu = useStateMenuList()
  const location = useLocation()
  const breadcrumbItems = useMemo(() => {
    const arr = getCurrentPageMenuInfo(menu, location.pathname)
    return arr.map((e) => {
      return {
        title: e.label,
      }
    })
  }, [menu, location])
  return (
    <div id="crumbs" className="page-box">
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    </div>
  )
}

export default Crumbs
