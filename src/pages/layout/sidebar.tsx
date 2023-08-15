import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Button, Affix, Col } from 'antd'
import SvgIcon from '@/components/svgIcon'
import type { MenuProps } from 'antd/es/menu'
type AntdMenuItem = Required<MenuProps>['items'][number]

const layoutTypes = {
  SINGLE_COLUMN: 'SINGLECOLUMN',
  TWO_COLUMN: 'TWO_COLUMN',
  TWO_FLANKS: 'TWO_FLANKS',
  FULL_SCREEN: 'FULLSCREEN',
}
const { Sider } = Layout

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
  if (item.isShowOnMenu === false) {
    return null
  }
  if (!item.children) {
    return getItem(
      <Link to={path + item.path}>{item.title}</Link>,
      item.key,
      <SvgIcon name={item.menu.icon} myClass="font-12" />
    )
  }
  return getItem(
    item.title,
    item.key,
    <SvgIcon name={item.menu.icon} myClass="font-12" />,
    item.children.map((i) => renderMenu(i, path + item.path))
  )
}

const FlexBox = ({ children }: { children: JSX.Element }) => {
  return (
    <Col sm={6} md={10} lg={15} className="fl">
      {children}
    </Col>
  )
}
const SliderContent = ({ children }: { children: JSX.Element }) => {
  const [collapsed, setCollapsed] = useState(false)
  // 折叠菜单
  const toggleCollapsed = (e: any) => {
    setCollapsed(!collapsed)
    e.stopPropagation()
  }
  return (
    <Affix>
      <Sider width={200} collapsed={collapsed}>
        {children}
        <div>
          <Button onClick={toggleCollapsed}>
            {collapsed ? '展开' : '收起'}
            <SvgIcon name={collapsed ? 'icon_next' : 'icon_back'} myClass="font-12" />
          </Button>
        </div>
      </Sider>
    </Affix>
  )
}

const SiderMenu = () => {
  const layout = layoutTypes.SINGLE_COLUMN // 状态
  const menuList = useSelector((state: State) => state.menu.menuList) // 菜单列表
  // 菜单组折叠
  function onOpenChange() {
    // dispatch(setOpenKey(keys))
  }

  // 菜单选项
  const menuComponent = useMemo(() => menuList.map((m) => renderMenu(m, '')), [menuList])

  const WrapContainer = useMemo(
    () => (layout === layoutTypes.SINGLE_COLUMN ? FlexBox : SliderContent),
    [layout]
  )

  // classname
  const clsName = useMemo(() => {
    if (layout === layoutTypes.TWO_FLANKS) {
      return ' twoFlanks hide-scrollbar'
    }
    if (layout !== layoutTypes.SINGLE_COLUMN) {
      return ' hide-scrollbar'
    }
    return ' col'
  }, [layout])

  const mode = useMemo(() => {
    if (layout === layoutTypes.SINGLE_COLUMN) {
      return 'horizontal'
    }
    return 'inline'
  }, [layout])

  return (
    <WrapContainer>
      <Menu
        mode={mode}
        triggerSubMenuAction="click"
        className={clsName}
        onOpenChange={onOpenChange}
        items={menuComponent}
      />
    </WrapContainer>
  )
}

export default SiderMenu
