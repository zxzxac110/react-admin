import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Layout, Menu, Button, Dropdown, MenuProps } from 'antd'
import SvgIcon from '@/components/svgIcon'
import titleImage from '@/assets/images/title.svg' // 使用 @ 别名引入图片
import './index.less'

function Header(props) {
  const navigate = useNavigate()

  const items: MenuProps['items'] = [
    {
      key: 'out',
      label: (
        <div
          onClick={() => {
            // storage.clear()
            navigate('/login', { replace: true })
          }}>
          退出登录
        </div>
      ),
    },
  ]

  return (
    <div className="d-flex header align-center ">
      <div className="line"></div>
      <div className="hamburger-container">
        <svg
          className="hamburger"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18">
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
        </svg>
      </div>
      <div className="flex1"></div>
      <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
        <Button>bottom</Button>
      </Dropdown>
    </div>

    // <CSSTransition>
    //   <div className="header sidebar-logo-container">
    //     <Link to="/" className="full d-flex align-center justify-center">
    //       <SvgIcon name="logo" myClass="font-28"></SvgIcon>
    //       <img src={titleImage} className="title-svg ml-2" alt="" />
    //     </Link>
    //     {/* // <router-link v-if="getCollapse" key="collapse" class="sidebar-logo-link" to="/">
    //   //   <SvgIcon name="logo" myClass="font-28"></SvgIcon>
    //   // </router-link>
    //   // <router-link
    //   //   v-else
    //   //   key="expand"
    //   //   class="sidebar-logo-link"
    //   //   style="display: flex;justify-content: start;align-items: center;"
    //   //   to="/"
    //   // >
    //   //   <SvgIcon name="logo" myClass="font-28"></SvgIcon>
    //   //   <SvgIcon name="title" myClass="font-28"></SvgIcon>
    //   //   <i className="bw-icon title-icon"></i>
    //   // </router-link> */}
    //   </div>
    // </CSSTransition>
  )
}

export default Header
