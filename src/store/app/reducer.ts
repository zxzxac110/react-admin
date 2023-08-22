

const menuState: AppState = {
  theme: (localStorage.getItem('theme') || 'defaultTheme') as Theme
};

export default function reducer(state = menuState, action: AppAction): AppState {
  switch (action.type) {
    case 'setTheme': {
      localStorage.setItem('theme', action.theme)
      return { ...state, theme: action.theme };
    }
    default:
      return state
  }
}