import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserMenu, setCollapsed } from '../action'

export const useStateMenuList = () => useSelector((state: State) => state.menu.menuList) // 菜单列表
export const useStateCollapsed = () => useSelector((state: State) => state.menu.collapsed)

export function useDispatchMenu() {
  const dispatch = useDispatch()
  const stateSetMenuList = useCallback(
    (list: MenuItem[]) => dispatch(setUserMenu(list)),
    [dispatch]
  ) // 设置菜单
  const stateSetCollapsed = useCallback(
    (collapsed: boolean) => dispatch(setCollapsed(collapsed)),
    [dispatch]
  ) // 设置菜单
  return {
    stateSetMenuList,
    stateSetCollapsed,
  }
}
