export const USER_INFO = "USER_INFO"; // 用户信息
export const TOKEN = "REACT_ADMIN_TOKEN"; // token
export const MENU = "MENU"; // 菜单

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
 * 菜单处理
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