import User from "@/types/users.types"
import UserActionTypes from "./user.action.types"
import { Action } from "redux"

interface LoginUserAction  {
    type: typeof UserActionTypes.LOGIN
    payload: User
}

export const loginUser = (payload: User) => ({type: UserActionTypes.LOGIN, payload})

interface LogoutUserAction { 
    type: typeof UserActionTypes.LOGOUT
}

export const logoutUser = () => ({type: UserActionTypes.LOGOUT})

export type UserAction = LoginUserAction | LogoutUserAction