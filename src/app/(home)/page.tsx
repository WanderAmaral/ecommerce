"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import Button from "../components/button/button";
import { collection, getDocs, query, where } from "firebase/firestore";


import { UserConverter } from "@/converters/firestore.converter";
import Loading from "../components/loading/loading.component";


const Home: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
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
        const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(UserConverter), where('id', '==', user.uid)))

        const userFromFirestore = querySnapshot.docs[0]?.data()
        return loginUser(userFromFirestore)
      }
      return setIsInitializing(false)
    });
    
  },);
  console.log({isAuthenticated})

  

  if(isInitializing ) return <Loading />

  return (
    <div>
      <Categories />

      {isAdministrador === true && <Button>Clique-me</Button>}
    </div>
  );
};

export default Home;
