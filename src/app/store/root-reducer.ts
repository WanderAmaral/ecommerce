import cartReducer from './reducers/cart/cart-reducer';
import userReducer from './reducers/user/user-reducers'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer,
    cartReducer
})

export default rootReducer