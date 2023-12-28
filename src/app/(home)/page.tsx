"use client";
import { FunctionComponent, useEffect } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import Button from "../components/button";
import { collection, getDocs, query, where } from "firebase/firestore";


const Home: FunctionComponent = () => {
  const { isAdministrador, isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // se o usuário estiver logado no contexto, e o usuário do firebase (sign out)
      // devemos limpar o contexto (sign out) 
      console.log(user);
      const isSignInOut = isAuthenticated && !user
      if(isSignInOut) {
        return logoutUser()
      }
      const isSignIngIn = !isAuthenticated && user
      if(isSignIngIn) {
        const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))

        const userFromFirestore = querySnapshot.docs[0]?.data()
        return loginUser(userFromFirestore as any)
      }
      
    });
  },);
  console.log({isAuthenticated})



  return (
    <div>
      <Categories />

      {isAdministrador === true && <Button>Clique-me</Button>}
    </div>
  );
};

export default Home;
