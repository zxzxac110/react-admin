import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateMenuList, useStateCollapsed } from '@/store/hooks/menu'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import SvgIcon from '@/components/svgIcon'
import type { MenuProps } from 'antd/es/menu'
type AntdMenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: AntdMenuItem[]
) =>
  ({
    key,
    icon,
    children,
    label,
  } as AntdMenuItem)

const renderMenu = (item: MenuItem, path: string): AntdMenuItem => {
  if (!item.children) {
    return getItem(
      <Link to={path + item.path}>{item.title}</Link>,
      item.key,
      <SvgIcon name={item.icon} myClass="font-20 mx-2" />
    )
  }
  return getItem(
    item.title,
    item.key,
    <SvgIcon name={item.icon} myClass="font-20 mx-2" />,
    item.children.map((i) => renderMenu(i, path + item.path))
  )
}

function convertPathToArray(path: string) {
  // /xx1/xx2/xx3...  转化成 [xx1 , .. , xx1Xx2Xx3..]
  const pathArray = path.split('/').filter((item) => item !== '')

  function recursiveConvert(index: number): string[] {
    if (index > pathArray.length) {
      return []
    }

    const currentPath = pathArray
      .slice(0, index)
      .map((item: string, index) => {
        return index > 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
      })
      .join('')

    const restPaths = recursiveConvert(index + 1)
    return [currentPath, ...restPaths]
  }

  return recursiveConvert(1)
}

const SidebarMenu = () => {
  const menuList = useStateMenuList() // 菜单列表
  const collapsed = useStateCollapsed()
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = convertPathToArray(location.pathname)
  // const openKeys = menuList.map(e => e.key)
  const defaultSelectedKeys = pathname.splice(-1) // 初始选中的菜单项 key 数组
  const [openKeys, setOpenKeys] = useState<string[]>(pathname) // 当前展开的 SubMenu 菜单项 key 数组
  console.log(menuList, openKeys, defaultSelectedKeys)
  // 打开父菜单
  function onOpenChange(keys: string[]) {
    setOpenKeys(keys.length ? [keys[keys.length - 1]] : [])
  }

  // 菜单选项
  const menuComponent = useMemo(() => menuList.map((m) => renderMenu(m, '')), [menuList])
  // 解决 折叠后一级菜单点击没有跳转
  function onClick(key: Record<string, any>) {
    navigate('/' + key.keyPath.join('/'))
  }
  return (
    <div>
      <div className="layout-sidebar-menu">
        <Menu
          mode="inline"
          // triggerSubMenuAction="click"
          inlineCollapsed={collapsed}
          openKeys={openKeys}
          onClick={onClick}
          defaultSelectedKeys={defaultSelectedKeys}
          onOpenChange={onOpenChange}
          items={menuComponent}
        />
      </div>
    </div>
  )
}

export default SidebarMenu
