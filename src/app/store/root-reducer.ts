import cartReducer from "./toolkit/cart/cart.slice";
import categoryReducer from "./reducers/category/category-reducer";
import { combineReducers } from "redux";
import userReducer from "./toolkit/user/user.slice";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
});

export default rootReducer;
