import { getMenu } from "@/api";

export const USER_INFO = "USER_INFO"; // 用户信息
export const TOKEN = "REACT_ADMIN_TOKEN"; // token
export const MENU = "MENU"; // 菜单

// 打印内容显示在页面上
export function fieldShowPage(field: number | string | object): string {
  if (typeof field === 'string') {
    return field
  } else if (typeof field === 'number') {
    return field + ''
  } else {
    return JSON.stringify(field)
  }
}

// 获取地址栏参数
export function getQuery() {
  const url = location.search
  const query: Record<string, any> = {}
  if (url.indexOf('?') != -1) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      query[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return query
}

export function selectFormat(obj?: Record<string, Record<string, any>>): Record<string, Record<string, any>> {
  if (!obj) {
    return {}
  }
  const newObj: Record<string, any> = {}
  for (const key in obj) {
    const element = obj[key]
    newObj[key] = []
    if (Array.isArray(element)) {
      element.forEach((e, i) => {
        newObj[key].push({
          value: i,
          label: e
        })
      })
    } else {
      for (const value in element) {
        newObj[key].push({
          value: value,
          label: element[value]
        })
      }
    }
  }
  console.log(newObj)
  return newObj
}

// function genFormElement() {
//  />
// }

/**
 * 存储方式
 * @param isLocal 是否永久 
 */
function getStorage(isLocal: boolean): Storage {
  return isLocal ? window.localStorage : window.sessionStorage;
}
function getKey(isLocal: boolean, key: string) {
  return JSON.parse(getStorage(isLocal).getItem(key) || "null");
}

function setKey(isLocal: boolean, key: string, data: any) {
  getStorage(isLocal).setItem(key, JSON.stringify(data || null));
}

function rmKey(isLocal: boolean, key: string) {
  getStorage(isLocal).removeItem(key);
}

/**
 * 获取用户信息
 */
export function getLocalUser() {
  return getKey(true, USER_INFO);
}
/**
 * 获取用户信息
 */
export function getSessionUser() {
  return getKey(false, USER_INFO);
}
/*
* 存储用户信息
*/
export function saveUser(info: UserInfo) {
  setKey(true, USER_INFO, info);
  setKey(false, USER_INFO, info);
}

/**
 * 存储token
 */
export function saveToken(token: Token) {
  setKey(true, TOKEN, token)
}
export function getToken(): Token {
  return getKey(true, TOKEN)
}
/**
 * 批量清除本地缓存数据
 */
export function clearLocalDatas(keys: string[]) {
  keys.forEach((key) => {
    rmKey(true, key);
    rmKey(false, key);
  });
}
/**
 * 退出
 */
export function layout() {
  clearLocalDatas([TOKEN, MENU]); // 不移除USER_INFO 因为登录页的账号取得是这里的
}

/**
 * 获取菜单
 */
function getLocalMenu(): MenuResponse | null {
  return getKey(false, MENU);
}

function saveLocalMenu(list: MenuResponse) {
  setKey(false, MENU, list);
}
export async function getMenus() {
  let localMenu = getLocalMenu();
  if (localMenu) { return localMenu }
  localMenu = await getMenu()
  saveLocalMenu(localMenu);
  return localMenu
}

/**
 * 菜单格式化处理,将后台传递的一维数组改成树形结构
 * @param list 
 * @returns 
 */
export function formatMenu(list: MenuList) {
  const newList = list.map(item => ({ ...item }))
  const menuMap: MenuMap = {};
  const parentMenu: MenuList = [];
  newList.forEach((item) => {
    // 当前 菜单的key
    const currentKey = item.key;
    // 当前 菜单的父菜单key
    const currentParentKey = item.parentKey;
    // 如果 映射表还没有值 就把当前项 赋值进去
    if (!menuMap[currentKey]) {
      menuMap[currentKey] = item;
    } else {
      // 有值 说明 有子项 保留子项 把当前值 赋值进去
      item.children = menuMap[currentKey].children;
      menuMap[currentKey] = item;
    }
    // 如果当前项 有父级
    if (currentParentKey) {
      // 父级还没有在映射表上
      if (!menuMap[currentParentKey]) {
        // 那就把映射上去 只有子集属性<Array>类型
        menuMap[currentParentKey] = {
          children: [item],
        };
      } else if (
        menuMap[currentParentKey] &&
        !menuMap[currentParentKey].children
      ) {
        // 父级在映射表上 不过 没子集
        menuMap[currentParentKey].children = [item];
      } else {
        // 父级有 子集合也有
        menuMap[currentParentKey].children?.push(item);
      }
    } else {
      // 当前项是没有父级 那当前项就是父级项
      parentMenu.push(item);
    }
  });
  return parentMenu;
}

export function reduceMenuList(list: MenuList, path: string = ''): MenuList {
  const data: MenuList = [];
  list.forEach((i) => {
    const { children, ...item } = i;
    item.parentPath = path;
    if (children) {
      const childList = reduceMenuList(children, path + i.path);
      data.push(...childList);
    }
    data.push(item);
  });
  return data;
}


export function getMenuParentKey(list: MenuList, key: string): string[] {
  const keys = [];
  const info = list.find((item) => item[MENU_KEY] === key);
  const parentKey = info?.[MENU_PARENTKEY];
  if (parentKey) {
    const data = getMenuParentKey(list, parentKey)
    keys.push(...data);
    keys.push(parentKey);
  }
  return keys;
}