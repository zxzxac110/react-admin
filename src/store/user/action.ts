export const setUserInfoAction = (userInfo: UserInfo): UserAction => ({
  type: 'setUserinfo',
  userInfo,
});

export const clearUser = (): UserAction => ({
  type: 'clearUserinfo',
});

export const setToken = (token: string): UserAction => ({
  type: 'setToken',
  token,
});

export const clearToken = (): UserAction => ({
  type: 'clearToken',
});
