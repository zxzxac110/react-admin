import { useState } from 'react'
import { Form, Input, Button, message, Row } from 'antd'
import { ReactComponent as IconUser } from '@/svg/user.svg'
import { ReactComponent as IconLocking } from '@/svg/locking.svg'
import { saveUser, getLocalUser, saveToken } from '@/utils'
import { useDispatchUser } from '@/store/hooks/user'
import { login } from '@/api'
import './index.less'

const IPT_RULE_USERNAME = [
  {
    required: true,
    message: '请输入用户名',
  },
]

const IPT_RULE_PASSWORD = [
  {
    required: true,
    message: '请输入密码',
  },
]
function Login() {
  const [loading, setLoading] = useState(false)
  const { stateSetUser, stateSetToken } = useDispatchUser()
  const onFinish = async (values: Record<string, string | boolean>) => {
    try {
      setLoading(true)
      const res = await login(values)
      const info =  res.data
      // message.success(res.msg) 
      saveToken(res.token)
      stateSetToken(res.token)
      saveUser(info)
      stateSetUser(info)
      // 没有路由跳转 可根据监听 || 刷新页面 || 强制跳转 到用户页面
      // 监听： ./appRouter useEffect token进行登录页判断
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="title">后台</div>
        <div className="welcome">欢迎使用，请先登录</div>
        <Form
          className="login-form"
          initialValues={{
            remember: true,
            ...getLocalUser(),
          }}
          onFinish={onFinish}>
          <Form.Item name="account" rules={IPT_RULE_USERNAME}>
            <Input
              prefix={<IconUser className="font-20 grey--text svg-icon" />}
              placeholder="账号:admin/user"
            />
          </Form.Item>
          <Form.Item name="pswd" rules={IPT_RULE_PASSWORD}>
            <Input
              prefix={<IconLocking className="font-20 grey--text svg-icon" />}
              type="password"
              autoComplete="off"
              placeholder="密码:admin123/user123"
            />
          </Form.Item>
          <Row justify="space-around">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}>
              登录
            </Button>
            <Button htmlType="reset">重置</Button>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default Login
