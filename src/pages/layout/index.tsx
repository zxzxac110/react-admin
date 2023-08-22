import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { useStateCollapsed } from '@/store/hooks'
import SvgIcon from '@/components/svgIcon'
import Logo from './logo'
import Sidebar from './sidebar'
import Header from './header/index'
import Crumbs from './crumbs/index'

const { Content } = Layout
import './index.less'
const LayoutContainer = () => {
  const collapsed = useStateCollapsed()
  return (
    <div className="theme d-flex">
      <div className={'layout-sidebar ' + (collapsed ? 'collapsed' : '')}>
        <Logo></Logo>
        <Sidebar></Sidebar>
      </div>
      <div className="flex1 overflow-hidden">
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
          }}>
          <Header></Header>
          <div className="content-box">
            <Crumbs></Crumbs>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutContainer
