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

// select 格式
export function selectFormat(obj?: TableMaps): SelectMaps {
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
          value: i + '',
          label: e
        })
      })
    } else {
      for (const value in element) {
        newObj[key].push({
          value: value + '',
          label: element[value]
        })
      }
    }
  }
  return newObj
}

/*退出 */
export function outLogin() {
  clearLocalData(
    [TOKEN, MENU, USER_INFO]);
}

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
export function clearLocalData(keys: string[]) {
  keys.forEach((key) => {
    rmKey(true, key);
    rmKey(false, key);
  });
}


/**
 * 获取菜单
 */
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

