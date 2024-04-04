import userReducer from './reducers/user/user-reducers'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer,
})

export default rootReducer