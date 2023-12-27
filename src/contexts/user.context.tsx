'use client'
import { FunctionComponent, createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null
});

interface UserContextProviderProps {
    children: React.ReactNode
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(2 as any)
  return <UserContext.Provider value={{currentUser}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
