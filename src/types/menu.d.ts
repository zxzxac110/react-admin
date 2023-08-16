declare type MenuAction = {
  type: string
  keys: string[]
  menuItem: OpenedMenu
  list: MenuItem[]
  collapsed: boolean
  path: string
}

// 
declare interface OpenedMenu {
  key: string
  path: string
  title: string
}

declare interface MenuState {
  collapsed: boolean
  openedMenu: OpenedMenu[]
  openMenuKey: string[]
  selectMenuKey: string[]
  menuList: MenuItem[],
  currentPath: string
}

// 未处理的菜单列表信息
declare interface MenuItem {
  menu_id: number
  icon: string
  keepAlive: string
  key: string | number
  order?: number
  parentKey: string
  path: string // 路径    MENU_PATH
  title: string
  children?: MenuList
  parentPath?: string
  isShowOnMenu?: boolean | string // 显示菜单MENU_SHOW
  [key: string]: any
}

declare type MenuMap = {
  [key: string]: {
    [MENU_CHILDREN]: Array<MenuItem>
  } | MenuItem
} | {
  [key: string]: MenuItem
}

declare type MenuList = MenuItem[]


declare type MenuResponse = MenuList

declare type MenuListResponse = {
  data: MenuList,
  mapKey: MapKey
}
