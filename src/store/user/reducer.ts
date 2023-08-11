import { getSessionUser } from "@/utils";
const actionTypes = {
  SET_USERINFO: "SET_USERINFO",
  CLEAR_USERINFO: "CLEAR_USERINFO",
}
const initState: UserInfo = getSessionUser()

export default function reducer(state = initState, action: UserAction) {
  const { type, info } = action
  switch (type) {
    case actionTypes.SET_USERINFO:
      return info
    case actionTypes.CLEAR_USERINFO: {
      return null
    }
    default:
      return state
  }
}