

const menuState: MenuState = {
  menuList: [], // 侧边菜单
  collapsed: false, // 是否收缩
  openedMenu: [], // 保存已经打开的菜单栏 用于顶部导航
  openMenuKey: [], // 打开的菜单栏的key  用于侧边栏
  selectMenuKey: [], // 选中菜单栏的key  用户侧边栏
  currentPath: "", // 页面当前路径
};

export default function reducer(state = menuState, action: MenuAction): MenuState {
  switch (action.type) {
    case 'setMenu': { // 修改侧边菜单
      return { ...state, menuList: action.list };
    }
    case 'setCollapsed': {
      return { ...state, collapsed: action.collapsed };
    }
    default:
      return state
  }
}