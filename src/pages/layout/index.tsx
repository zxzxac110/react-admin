import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { useStateCollapsed } from '@/store/hooks'
import SvgIcon from '@/components/svgIcon'
import Logo from './logo'
import Sidebar from './sidebar'
import Header from './header/index'

// import Header from "./header";
// import Menu from "./siderMenu";
// import TopMenu from "./topMenu";
// import Footer from "./footer";
// import Router from "@/router";
// import { LayoutModeProps } from "./index";
// import { useStyle } from "./style";
const { Content } = Layout
import './index.less'
// <Layout className="my-layout-body">
//   <Outlet />
//   {/* <Router /> */}
//   {/* <Header children={null} />
//   <Layout>
//     <Menu />
//     <Layout className="layout-content-wrap">
//       <TopMenu />
//       <Content className={styles.layoutContentBody}>
//         <Router />
//       </Content>
//       <Footer />
//     </Layout>
//   </Layout> */}
// </Layout>
// <div class="theme">
// //   <CoreSidebar></CoreSidebar>
// //   <div class="admin-wrap" :class="{ hideSidebar: getCollapse }">
// //     <!-- 遮罩层 -->
// //     <div class="drawer-bg" @click="set"></div>
// //     <CoreHeader></CoreHeader>
// //     <!-- 内容 -->
// //     <div id="container" class="content-box">
// //       <router-view v-slot="{ Component }">
// //         <transition name="fade-transform">
// //           <!-- <keep-alive :include="isCached"> -->
// //           <component :is="Component" />
// //           <!-- </keep-alive> -->
// //         </transition>
// //       </router-view>
// //     </div>
// //   </div>
// </div>

const LayoutContainer = () => {
  const collapsed = useStateCollapsed()
  // const { styles } = useStyle();
  return (
    <div className="theme d-flex">
      <div className={'layout-sidebar ' + (collapsed ? 'collapsed' : '')}>
        <Logo></Logo>
        <Sidebar></Sidebar>
      </div>
      <div className="flex1">
        <Header></Header>
        <div className="content-box">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default LayoutContainer
