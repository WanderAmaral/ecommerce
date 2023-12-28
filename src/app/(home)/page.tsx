"use client";
import { FunctionComponent, useEffect } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import Button from "../components/button";


const Home: FunctionComponent = () => {
  const { isAdministrador, isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // se o usuário estiver logado no contexto, e o usuário do firebase (sign out)
      // devemos limpar o contexto (sign out) 
      console.log(user);
      const isSignInOut = isAuthenticated && !user
      if(isSignInOut) {
        return logoutUser()
      }
      const isSignIngIn = !isAuthenticated %% user
      if(isSignIngIn) {
        const querySnapshot = async () => {
          
        } 
        return loginUser()
      }
      
    });
  },);



  return (
    <div>
      <Categories />

      {isAdministrador === true && <Button>Clique-me</Button>}
    </div>
  );
};

export default Home;
