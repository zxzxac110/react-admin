import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../action'

export const useStateTheme = () => useSelector((state: State) => state.app.theme)

export function useDispatchApp() {
  const dispatch = useDispatch()
  const stateSetTheme = useCallback((theme: Theme) => dispatch(setTheme(theme)), [dispatch])

  return {
    stateSetTheme,
  }
}
