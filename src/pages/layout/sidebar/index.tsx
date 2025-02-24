import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateMenuList, useStateCollapsed } from '@/store/hooks/menu'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import SvgIcon from '@/components/svgIcon'
import type { MenuProps } from 'antd/es/menu'
import { getCurrentPageMenuInfo } from '@/utils/menu'
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
  })

const renderMenu = (item: MenuItem): AntdMenuItem => {
  if (!item.children) {
    return getItem(
      <Link to={item.path}>{item.label}</Link>,
      item.key,
      <SvgIcon name={item.icon} myClass="font-20 mx-2" />
    )
  }
  return getItem(
    item.label,
    item.key,
    <SvgIcon name={item.icon} myClass="font-20 mx-2" />,
    item.children.map((i) => renderMenu(i))
  )
}

const SidebarMenu = () => {
  const menuList = useStateMenuList() // 菜单列表
  const collapsed = useStateCollapsed()
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = getCurrentPageMenuInfo(menuList, location.pathname).map(e => e.key)
  const defaultSelectedKeys = pathname.splice(0, 1) // 初始选中的菜单项 key 数组
  const [openKeys, setOpenKeys] = useState<string[]>(pathname) // 当前展开的 SubMenu 菜单项 key 数组
  // 打开父菜单
  function onOpenChange(keys: string[]) {
    // 只打开一个菜单 todo 多级菜单无法打开子集
    // setOpenKeys(keys.length ? [keys[keys.length - 1]] : [])
    setOpenKeys(keys)
  }

  // 菜单选项
  const menuComponent = useMemo(() => menuList.map((m) => renderMenu(m)), [menuList])

  function onClick(key: Record<string, any>) {
    // 解决 折叠后一级菜单点击没有跳转
    if (collapsed && key.keyPath.length === 1) {
      navigate('/' + key.key)
    }
  }
  return (
    <div>
      <div className="layout-sidebar-menu secondary-border-right">
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
