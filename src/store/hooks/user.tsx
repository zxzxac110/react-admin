import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfoAction, clearUser, setToken, clearToken } from '../action'

export const useStateUserInfo = () => useSelector((state: State) => state.user?.userInfo) // 用户信息
export const useStateToken = () => useSelector((state: State) => state.user?.token) // 用户信息

export function useDispatchUser() {
  const dispatch = useDispatch()
  return {
    stateSetUser: useCallback((info: UserInfo) => dispatch(setUserInfoAction(info)), [dispatch]),
    stateClearUser: useCallback(() => dispatch(clearUser()), [dispatch]),

    stateSetToken: useCallback((token: string) => dispatch(setToken(token)), [dispatch]),
    stateClearToken: useCallback(() => dispatch(clearToken()), [dispatch]),
  }
}
