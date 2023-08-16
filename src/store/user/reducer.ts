import { getLocalUser, getToken } from "@/utils";

const userState: UserState = {
  token: getToken(),
  userInfo: getLocalUser(),
};

export default function reducer(state = userState, action: UserAction): UserState {
  const { type, userInfo, token } = action
  switch (type) {
    case 'setUserinfo': {
      return { ...state, userInfo: userInfo || null };
    }
    case 'clearUserinfo': {
      return { ...state, userInfo: null };
    }
    case 'setToken': {
      return { ...state, token: token || '' };
    }
    case 'clearToken': {
      return { ...state, token: '' };
    }
    default:
      return state
  }
}