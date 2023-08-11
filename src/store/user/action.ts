
const ActionTypes = {
  SET_USERINFO: "SET_USERINFO",
  CLEAR_USERINFO: "CLEAR_USERINFO",
}
export const setUserInfoAction = (info: UserInfo): UserAction => ({
  type: ActionTypes.SET_USERINFO,
  info,
});

export const clearUser = (): UserAction => ({
  type: ActionTypes.CLEAR_USERINFO,
});
