"use client";

import { auth, db } from "@/config/firebase-config";
import User from "@/types/users.types";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, {
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from "react";

interface UserContextProviderProps {
  children: React.ReactNode;
}
interface UserContextProps {
  adminUser: UserAdm | null;
  isAdministrador: UserAdm | boolean;
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}
interface UserAdm {
  email: string;
}

export const UserContext = createContext<UserContextProps>({
  adminUser: null,
  isAdministrador: false,
  loginUser: () => {},
  logoutUser: () => {},
  isAuthenticated: false,
});

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({
  children,
}) => {
  // Defina o estado inicial como um objeto UserAdm
  const [adminUser, setAdminUser] = useState<UserAdm | null>({
    email: process.env.USER_EMAIL || "wanderguizi@gmail.com",
  });
  const [isAdministrador, setIsAdministrador] = useState<UserAdm | boolean>(
    false
  );

  const isAuthenticated = adminUser !== null;

  const loginUser = (user: User) => {
    setAdminUser(user);
  };
  const logoutUser = () => {
    setAdminUser(null);
  };

  const verificarAdministrador = async (userEmail: string) => {
    const userIsAdmin = collection(db, "users");

    const q = query(userIsAdmin, where("email", "==", userEmail));

    try {
      const snapShot = await getDocs(q);

      if (!snapShot.empty) {
        setIsAdministrador(true);
      } else {
        setIsAdministrador(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;

        if (userEmail === adminUser?.email) {
          verificarAdministrador(userEmail);
        }
      }
    });
  }, [adminUser]);

  return (
    <UserContext.Provider
      value={{
        adminUser,
        isAdministrador,
        loginUser,
        logoutUser,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
