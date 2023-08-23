import { useEffect } from 'react'
import { Button, Dropdown, MenuProps } from 'antd'
import SvgIcon from '@/components/svgIcon'
import userImage from '@/assets/images/user.png' // 使用 @ 别名引入图片
import {
  useDispatchUser,
  useStateUserInfo,
  useDispatchMenu,
  useDispatchApp,
  useStateCollapsed,
  useStateTheme,
} from '@/store/hooks'
import { layout } from '@/utils/index'

import './index.less'

function Header() {
  const userInfo = useStateUserInfo()
  const collapsed = useStateCollapsed()
  const { stateClearToken } = useDispatchUser()
  const { stateSetCollapsed } = useDispatchMenu()
  const { stateSetTheme } = useDispatchApp()

  const defaultSelectedKeys = [useStateTheme()]

  function setCollapsed() {
    stateSetCollapsed(!collapsed)
  }

  useEffect(() => {
    stateSetCollapsed(document.body.clientWidth < 1200)
    window.onresize = () => {
      stateSetCollapsed(document.body.clientWidth < 1200)
    }
  }, [])

  const items: MenuProps['items'] = [
    {
      key: 'out',
      label: (
        <div
          onClick={() => {
            stateClearToken()
            layout()
            // 此处不需要跳转 根据./appRouter useEffect token进行登录页判断
            // navigate('/login', { replace: true })
            // window.location.reload()
          }}>
          退出登录
        </div>
      ),
    },
  ]
  const themes: MenuProps['items'] = [
    {
      key: 'group',
      type: 'group',
      label: '选择主题',
      children: [
        {
          key: 'defaultTheme',
          label: (
            <div
              style={{ width: '120px' }}
              onClick={() => {
                stateSetTheme('defaultTheme')
              }}>
              默认
            </div>
          ),
        },
        {
          key: 'darkTheme',
          label: (
            <div
              style={{ width: '120px' }}
              onClick={() => {
                stateSetTheme('darkTheme')
              }}>
              暗黑
            </div>
          ),
        },
      ],
    },
  ]

  return (
    <div className="d-flex header align-center secondary-border-bottom">
      <div className="line secondary-line-bg"></div>
      <div className="hamburger-container " onClick={setCollapsed}>
        <svg
          className={'hamburger ' + (collapsed ? 'rotate' : '')}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18">
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" fill='currentColor'/>
        </svg>
      </div>
      <div className="flex1"></div>

      <Dropdown
        menu={{ items: themes, selectable: true, defaultSelectedKeys: defaultSelectedKeys }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}>
        <Button type="text" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <SvgIcon name="theme" myClass="font-30"></SvgIcon>
        </Button>
      </Dropdown>

      <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
        <Button type="text" className="mr-5 avatar-btn">
          <img src={userInfo?.avatar || userImage} className="user-avatar mr-2" />
          <span></span> {userInfo?.username}
          <SvgIcon name="arrows-down" myClass="font-12 ml-2"></SvgIcon>
        </Button>
      </Dropdown>
    </div>
  )
}

export default Header
