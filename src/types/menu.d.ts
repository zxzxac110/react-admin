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
  id: number, // 唯一
  menu_id: number // 父级ID
  icon: string // 图标
  keepAlive: string | boolean // bool
  key: string  // 唯一
  sort: number // 排序
  path: string // 路径
  label: string
  children?: MenuList
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
