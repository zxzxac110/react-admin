import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Button, Affix, Col } from 'antd'
import SvgIcon from '@/components/svgIcon'
import titleImage from '@/assets/images/title.svg' // 使用 @ 别名引入图片
import { CSSTransition } from 'react-transition-group'
function Logo(props) {
  const duration = 300
  const [inProp, setInProp] = useState(false)

  return (
    <CSSTransition in={inProp} timeout={duration} classNames="my-node">
      <div className="header sidebar-logo-container">
        <Link to="/" className="full d-flex align-center justify-center">
          <SvgIcon name="logo" myClass="font-28"></SvgIcon>
          <img src={titleImage} className="title-svg ml-2" alt="" />
        </Link>
      </div>
    </CSSTransition>
  )
}

export default Logo
