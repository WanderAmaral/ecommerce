const UserActionTypes = {
    LOGIN: 'user/login' as const, // O typescript nao inferir como string, mais sim como o valor dele que é 'user/login'
    LOGOUT: 'user/logout' as const
}

export default UserActionTypes