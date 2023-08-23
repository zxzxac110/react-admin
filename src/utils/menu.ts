import { createMenuList } from './route'

function getParentKey(list: MenuList, find: MenuItem, keys: MenuList) {
  const obj = list.find((e) => find.menu_id && e.id == find.menu_id)
  if (obj) {
    keys.push(obj)
    getParentKey(list, obj, keys)
  }
}

export function getCurrentPageMenuInfo(list: MenuList, path: string,): MenuList {
  const arr = createMenuList(list, [])
  const find = arr.find((e) => e.path === path)
  const keys = []
  if (find) {
    keys.push(find)
    getParentKey(arr, find, keys)
  }
  return keys
}

// export function getCurrentPageMenuInfo() {

// }