import localRouter from '@/router/list'

// 树形list菜单 和一维异步路由匹配
function generateRoutes(list: Record<string, any>[], arr: RouterInfo[]): RouterInfo[] {
  list.forEach((e) => {
    // 是否有匹配的值
    const matchSuccess = localRouter.asyncRouter.find(item => e.key === item.key)
    if (matchSuccess) {
      arr.push({
        ...e,
        ...matchSuccess,
      })
    }
    // 递归
    if (e.children && e.children.length > 0) {
      generateRoutes(e.children, arr)
    }
  })
  return arr
}

export function getRedirect(arr: Record<string, any>[]): string {
  return arr.find(e => e.path)?.path
}
// 树形菜单 转 一维数组
export function createMenuList(tree: MenuItem[], arr: MenuItem[]) {
  tree.forEach((e) => {
    arr.push({
      ...e,
      children: undefined
    })
    // 递归
    if (e.children && e.children.length > 0) {
      createMenuList(e.children, arr)
    }
  })
  return arr
}
// 一维数组菜单 转 树形菜单
export function createMenuTree(data: MenuItem[]) {
  const menuMap: Record<string, any> = {};
  const menuTree: Record<string, any>[] = [];

  // 构建菜单项映射
  data.forEach(item => {
    // item.menus = [];
    menuMap[item.id] = item; // 使用引用地址
  });
  data.forEach(item => {
    if (item.menu_id && menuMap[item.menu_id]) {
      if (menuMap[item.menu_id].children) {
        menuMap[item.menu_id].children.push(item);
      } else {
        menuMap[item.menu_id].children = [item];
      }
    } else {
      menuTree.push(item);
    }
  });

  return menuTree;
}

export function genRouterList(mergeRouterList: any[]): RouterInfo[] {
  if (mergeRouterList.length) {
    // 匹配成功的路由
    const matchRouter = generateRoutes(mergeRouterList, [])
    return matchRouter.concat(localRouter.constRouter)
  }
  return []
}
