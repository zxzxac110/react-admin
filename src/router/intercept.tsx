// 路由拦截
import { useEffect } from 'react'

interface Props {
  label?: string
  [key: string]: any
}

// 路由拦截
//  组件 标题
function Intercept({ components, label }: Props) {
  useEffect(() => {
    console.log('路由改变', label)
    if (!label) {
      return
    }
    document.title = label
    // if (!pageInit) {
    // setCurrentPageInfo()
    // setPageInit(true)
    // }
  }, [])

  return components
}
export default Intercept
