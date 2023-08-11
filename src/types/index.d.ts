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
  info?: UserInfo
}

declare type UserState = {
  user: UserInfo
}

type Token = string | null | undefined

// state类型
declare interface State {
  menu: MenuState
  user: UserInfo
  layout: LayoutMode[]
  componentsVisible: componentsVisible
  theme: StateTheme
}
