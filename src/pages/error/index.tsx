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
    subTitle = 'Sorry, the page you visited does not exist.',
  } = props
  const navigate = useNavigate()
  const back = () => {
    return navigate('/', { replace: true })
  }
  return (
    <Result
      status={status}
      title={errTitle}
      subTitle={subTitle}
      extra={
        <Button type="primary" onClick={back}>
          Go Back
        </Button>
      }
    />
  )
}

export default ErrorPage
