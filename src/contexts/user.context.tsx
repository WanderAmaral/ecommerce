'use client'

import { auth, db } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { FunctionComponent, createContext, useEffect, useState } from "react";

interface UserAdm {
  email: string;
}

interface UserContextProps {
  adminUser: UserAdm | null;
  isAdministrador: UserAdm | boolean
}

export const UserContext = createContext<UserContextProps>({
  adminUser: null,
  isAdministrador: false,
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({ children }) => {
  // Defina o estado inicial como um objeto UserAdm
  const [adminUser, setAdminUser] = useState<UserAdm | null>({ email: 'wanderguizi@gmail.com' });
  const [isAdministrador, setIsAdministrador] = useState(false)

  const verificarAdministrador = async (userEmail: string) => {
    const userIsAdmin = collection(db, 'users')

    const q = query(userIsAdmin, where('email', '==', userEmail))

    try {
      const snapShot = await getDocs(q)

      if(!snapShot.empty) {
        setIsAdministrador(true)
      } else {
        setIsAdministrador(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const userEmail = user.email;

        if(userEmail === adminUser?.email) {
          verificarAdministrador(userEmail)
        }
      }
    })

  }, [adminUser])

  return (
    <UserContext.Provider value={{ adminUser, isAdministrador }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
