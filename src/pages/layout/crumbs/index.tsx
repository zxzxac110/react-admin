import { useEffect, useMemo, useState } from 'react'
import { Breadcrumb } from 'antd'
import { useStateMenuList } from '@/store/hooks'
import { useLocation } from 'react-router-dom'

function getBreadArray(list: MenuList, pathname: string): Record<string, string>[] {
  let arr: Record<string, string>[] = [{ a: 'a' }]
  const item = list.find((e) => pathname.indexOf(e.path))
  if (item) {
    arr.push({
      title: item.title,
    })
    if (item.children) {
      arr = arr.concat(getBreadArray(item.children, pathname))
    }
  }
  return arr
}

function Crumbs() {
  const menu = useStateMenuList()
  const location = useLocation()
  const breadcrumbItems = useMemo(() => {
    return getBreadArray(menu, location.pathname)
  }, [menu, location])
  return (
    <div className="page-box">
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    </div>
  )
}

export default Crumbs
