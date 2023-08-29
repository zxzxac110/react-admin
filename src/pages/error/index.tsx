import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

interface ErrProps {
  status?: 403 | 404 | 500 | '403' | '404' | '500'
  errTitle?: string
  subTitle?: string
  [name: string]: any
}

function ErrorPage(props: ErrProps) {
  const {
    status = '404',
    errTitle = '404',
    subTitle = '对不起，您访问的页面不存在。',
  } = props
  const navigate = useNavigate()
  const back = () => {
    return navigate('/', { replace: true })
  }
  return (
    <div className="page-box flex1 page-table flex1 mb-4">
      <Result
        status={status}
        title={errTitle}
        subTitle={subTitle}
        extra={
          <Button type="primary" onClick={back}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}

export default ErrorPage
