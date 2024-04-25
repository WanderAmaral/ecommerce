import cartReducer from './reducers/cart/cart-reducer';
import categoryReducer from './reducers/category/category-reducer';
import { combineReducers } from "redux";
import userReducer from './reducers/toolkit/user/user.slice';

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    categoryReducer
})

export default rootReducer