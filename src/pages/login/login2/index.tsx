import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import SvgIcon from '@/components/svgIcon'
import { saveToken } from '@/utils'
import { useDispatchUser } from '@/store/hooks/user'
import { login, smsCode } from '@/api'
import './index.less'

const IPT_RULE_USERNAME = [
  {
    required: true,
    message: '请输入手机号',
  },
]

const IPT_RULE_PASSWORD = [
  {
    required: true,
    message: '请输入验证码',
  },
]
const backgroundImage = new URL('/images/bg0' + new Date().getDay() + '.jpg', import.meta.url).href
function Login() {
  const [formRef] = Form.useForm()
  const [loading, setLoading] = useState(false)
  // 获取验证码
  const [codeInfo, setCodeInfo] = useState({
    timer: null as NodeJS.Timer | null,
    txt: '获取验证码',
    totalTime: 60,
    nowTime: 0,
  })

  const { stateSetToken } = useDispatchUser()

  async function getPwdCode() {
    const mobile = formRef.getFieldsValue().mobile
    if (!mobile) {
      message.error({
        content: '请先输入手机号',
        className: 'red--text',
      })
      return
    }
    await smsCode({
      mobile: mobile,
      type: 'login',
    })
    setCodeInfo({
      ...codeInfo,
      nowTime: codeInfo.totalTime,
      txt: codeInfo.totalTime + '秒后重新获取',
    })
    countDown()
  }

  function countDown() {
    codeInfo.timer = setInterval(setIntervalFun, 1000)
  }

  function setIntervalFun() {
    setCodeInfo((prevCodeInfo) => {
      const { nowTime } = prevCodeInfo

      if (nowTime > 1) {
        return {
          ...prevCodeInfo,
          nowTime: nowTime - 1,
          txt: `${nowTime - 1}秒后重新获取`,
        }
      } else {
        clearInterval(prevCodeInfo.timer as NodeJS.Timeout)
        return {
          ...prevCodeInfo,
          timer: null,
          txt: '获取验证码',
        }
      }
    })
  }

  const onFinish = async (values: Record<string, string | boolean>) => {
    try {
      setLoading(true)
      const res = await login(values)
      localStorage.setItem('account', values.mobile as string)
      saveToken(res.token)
      stateSetToken(res.token)
      // 跳转页面
      // 此处没有路由跳转
      // 此处可以使用根据  ·监听 || 刷新页面 || 强制跳转 · 到指定
      // 此处使用监听： ./appRouter useEffect token变化进行登录页判断
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="login-vue po-re">
        <img src={backgroundImage} />
        <div className="login-box pa-8">
          <div className="mb-6">
            <svg width="100%" height="33">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" className="gradual-change-start" />
                  <stop offset="100%" className="gradual-change-end" />
                </linearGradient>
              </defs>
              <text x="0" y="26" fill="url(#grad)" className="font-30 font-bold">
                后台
              </text>
            </svg>
          </div>
          <div className="mt-5 mb-2">
            <Form
              form={formRef}
              className="login-form"
              initialValues={{
                mobile: localStorage.getItem('account') || '',
              }}
              onFinish={onFinish}>
              <Form.Item name="mobile" rules={IPT_RULE_USERNAME} className="mb-8">
                <Input
                  className="my-input"
                  maxLength={11}
                  prefix={<SvgIcon name="user" myClass="gray--text"></SvgIcon>}
                  placeholder="手机号"
                />
              </Form.Item>
              <Form.Item name="sms_code" rules={IPT_RULE_PASSWORD} className="mb-8">
                <div className="d-flex">
                  <Input
                    className="my-input"
                    style={{ width: '230px' }}
                    prefix={<SvgIcon name="code" myClass="gray--text"></SvgIcon>}
                    placeholder="验证码"
                  />
                  <Button className="flex1 ml-3 my-input gray--text font-bold" onClick={getPwdCode}>
                    {codeInfo.txt}
                  </Button>
                </div>
              </Form.Item>
              <div className=" text-center">
                <Button type="primary" htmlType="submit" className="btn" loading={loading}>
                  登录
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
