'use client'

import React, { FunctionComponent, createContext, useState } from "react";

interface UserAdm {
  email: string;
}

interface UserContextProps {
  adminUser: UserAdm | null;
}

export const UserContext = createContext<UserContextProps>({
  adminUser: null
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({ children }) => {
  // Defina o estado inicial como um objeto UserAdm
  const [adminUser, setAdminUser] = useState<UserAdm | null>({ email: 'wanderguizi@gmail.com' });
  

  return (
    <UserContext.Provider value={{ adminUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
