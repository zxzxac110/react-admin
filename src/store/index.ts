import { createStore, combineReducers } from "redux";
import MenuReducer from "./menu/reducer";
import UserReducer from "./user/reducer";
// import LayoutReducer from "./layout/reducer";
// import VisibleReducer from "./visible/reducer";
// import ThemeReducer from "./theme/reducer"
const reducer = combineReducers({
  menu: MenuReducer,
  user: UserReducer,
  // layout: LayoutReducer,
  // componentsVisible: VisibleReducer,
  // theme: ThemeReducer
});

const store = createStore(reducer,);

export default store;
