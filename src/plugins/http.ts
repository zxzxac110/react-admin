import axios, { AxiosError } from "axios";
import { outLogin } from "@/utils";

// 导入组合
import { message } from 'antd'
// import { useStateToken } from '@/store/hooks'
import { parse, stringify } from 'qs'
import { getToken } from '@/utils'


export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

const codeMessage: { [key: number]: string } = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

function emptyNoSend(data: Record<string, any>): Record<string, any> {
  // noFilter不为true的参数 将过滤空字段
  if (data.noFilter) {
    return data
  }
  const obj: Record<string, any> = {}
  for (const key in data) {
    const val = data[key]
    if (!(val === undefined || val === null || val === '')) {
      obj[key] = val
    }
    if (key === "create_time" && val && val.length) { // 创建时间
      obj.start_time = val[0]
      obj.end_time = val[1]
    }
  }
  obj.per_page = obj.pageSize
  delete obj.pageSize
  return obj
}

// 请求拦截器
http.interceptors.request.use(config => {
  const url = config?.url?.split('?') || []
  if (url[1]) {
    config.url = url[0] + '?' + stringify(emptyNoSend(parse(url[1])))
  }
  if (config.data && config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data'
  } else if (config.data) {
    config.data = emptyNoSend(config.data)
  }

  // const token = useStateToken()
  const token = getToken();// TODO 测试这个是否实时

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config
})

// 响应结果拦截器
http.interceptors.response.use(
  rep => rep.data,
  ((err: AxiosError) => {

    const rep: Record<string, any> = (err.response || {}).data || {}
    const status = (err.response || {}).status
    if (rep.message) {
      message.error(
        {
          content: rep.message,
          className: 'red--text',
        }
      )
    }

    if (status === 401) {
      // 清空用户信息
      outLogin()
      location.reload()
    } else if (!rep.message) {
      message.error(
        {
          content: codeMessage[status as number] || '服务器内部错误',
          className: 'red--text',
        }
      )
    }
    return Promise.reject(err)
  })
)

export default http