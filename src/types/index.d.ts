// 用户信息
declare type UserInfo = {
  account: string
  type: string
  user_id: number
  username: string
  isLogin?: boolean
} | null

declare type UserAction = {
  type: string
  userInfo?: UserInfo
  token?: string
}

declare type UserState = {
  userInfo: UserInfo | null
  token: string | undefined | null
}

type Token = string | null | undefined

// state类型
declare interface State {
  menu: MenuState
  user: UserState
  layout: LayoutMode[]
  componentsVisible: componentsVisible
  theme: StateTheme
}
