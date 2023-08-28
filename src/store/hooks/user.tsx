import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfoAction, clearUser, setToken, clearToken } from '../action'
import { getUserInfo } from '@/api'

export const useStateUserInfo = () => useSelector((state: State) => state.user?.userInfo) // 用户信息
export const useStateToken = () => useSelector((state: State) => state.user?.token) // 用户信息

export function useDispatchUser() {
  const dispatch = useDispatch()
  const stateSetUser = useCallback(
    (info: UserInfo) => dispatch(setUserInfoAction(info)),
    [dispatch]
  )

  const getUserData = async () => {
    let userData
    try {
      userData = await getUserInfo({})
      stateSetUser(userData as UserInfo)
    } catch (err) {
      console.error(err)
    }
    return userData
  }

  return {
    stateSetUser,
    getUserData,
    stateClearUser: useCallback(() => dispatch(clearUser()), [dispatch]),
    stateSetToken: useCallback((token: string) => dispatch(setToken(token)), [dispatch]),
    stateClearToken: useCallback(() => dispatch(clearToken()), [dispatch]),
  }
}
