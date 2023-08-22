import { Link } from 'react-router-dom'
import SvgIcon from '@/components/svgIcon'
import titleImage from '@/assets/images/title.svg' // 使用 @ 别名引入图片
import { useStateCollapsed } from '@/store/hooks'

function Logo() {
  const collapsed = useStateCollapsed()

  return (
    <div>
      <div className="header sidebar-logo-container secondary-border-bottom">
        <Link to="/" className="full d-flex align-center justify-center">
          <SvgIcon name="logo" myClass="font-28"></SvgIcon>
          {collapsed ? '' : <img src={titleImage} className="title-svg ml-2" alt="" />}
        </Link>
      </div>
    </div>
  )
}

export default Logo
