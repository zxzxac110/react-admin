import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import SvgIcon from '@/components/svgIcon'

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
  // const { styles } = useStyle();
  return (
    <div className="theme">
      <SvgIcon name="user" myClass="font-20 green--text"></SvgIcon>
      <Sidebar></Sidebar>
    </div>
  )
}

export default LayoutContainer
