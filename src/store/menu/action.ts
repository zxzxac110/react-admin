
export const setUserMenu = (list: MenuItem[]) => ({ // 修改侧边菜单
  type: 'setMenu',
  list,
});
export const setCollapsed = (collapsed: boolean) => ({
  type: 'setCollapsed',
  collapsed,
});

