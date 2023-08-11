declare type MessageList = MessageItem[]
declare type MessageItem = {
  add_time: string
  creator: string
  description: string
  m_id: number
  name: string
}
declare type MapKey = {
  dataIndex: string
  key: string
  title: string
  width?: number
  [keyname: string]: any
}[]
declare interface ResponseData {
  status: number
  msg?: string
}
declare interface MessageAPi extends ResponseData {
  data?: {
    total: number
    mapKey: MapKey
    list: MessageList
  }
}

declare interface LoginApi extends ResponseData {
  data: UserInfo
  token: string
}
declare type PowerList = {
  type_id: number
  name: string
  menu_id: string
}[]

declare interface PowerApi extends ResponseData {
  data: PowerList
  mapKey: MapKey
  menu: MenuList
}

declare interface MenuInfoApi extends ResponseData {
  data: MenuItem | null
}

declare type ResponseUserInfo = {
  account: string
  pswd: string
  type: string
  user_id: number
  username: string
}
declare interface UserListApi extends ResponseData {
  data: {
    list: ResponseUserInfo[]
    mapKey: MapKey
  }
  total: number
}

type TimeInfo = {
  time: string
  value: number
}
declare interface VisitorApi extends ResponseData {
  data: {
    deal: TimeInfo[]
    ips: TimeInfo[]
    today: {
      deal: number
      ips: number
    }
  }
}

declare type VisitData = {
  ip: string
  s_id: number
  status: string
  time: string
  url: string
}

declare interface VisitorListApi extends ResponseData {
  data: {
    mapKey: MapKey
    list: VisitData[]
    total: number
  }
}