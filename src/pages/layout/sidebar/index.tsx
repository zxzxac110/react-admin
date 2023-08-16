import React, { useMemo, useState } from 'react'
import { useStateMenuList, useStateCollapsed } from '@/store/hooks/menu'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'
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

const FlexBox = ({ children }: { children: JSX.Element }) => {
  return <div className="layout-sidebar-menu">{children}</div>
}

const SidebarMenu = () => {
  const menuList = useStateMenuList() // 菜单列表
  const collapsed = useStateCollapsed()

  // const openKeys = menuList.map(e => e.key)
  const [openKeys, setOpenKeys] = useState<string[]>([]) // 当前展开的 SubMenu 菜单项 key 数组
  // 打开父菜单
  function onOpenChange(keys: string[]) {
    setOpenKeys(keys.length ? [keys[keys.length - 1]] : [])
  }

  // 菜单选项
  const menuComponent = useMemo(() => menuList.map((m) => renderMenu(m, '')), [menuList])

  return (
    <div>
      <FlexBox>
        <Menu
          mode="inline"
          // triggerSubMenuAction="click"
          inlineCollapsed={collapsed}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={menuComponent}
        />
      </FlexBox>
    </div>
  )
}

export default SidebarMenu
