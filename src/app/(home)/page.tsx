/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase-config";
;
import { collection, getDocs, query, where } from "firebase/firestore";


import { UserConverter } from "@/converters/firestore.converter";
import Loading from "../components/loading/loading.component";
import { useDispatch, useSelector } from "react-redux";
import {loginUser, logoutUser } from "../store/reducers/user/user.action";
import { url } from "inspector";


const Home: FunctionComponent = () => {

  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((rootReducer: any) => rootReducer.userReducer)


  const [isInitializing, setIsInitializing] = useState(true)
  

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // se o usuário estiver logado no contexto, e o usuário do firebase (sign out)
      // devemos limpar o contexto (sign out) 
      
      const isSignInOut = isAuthenticated && !user
      if(isSignInOut) {
        dispatch(logoutUser())
        
        return setIsInitializing(false)
      }
      const isSignIngIn = !isAuthenticated && user
      if(isSignIngIn) {
        const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(UserConverter), where('id', '==', user.uid)))

        const userFromFirestore = querySnapshot.docs[0]?.data()
        dispatch(loginUser(userFromFirestore))
        return setIsInitializing(false)
      }
      return setIsInitializing(false)
    });
    
  }, [dispatch]);
  

  

  if(isInitializing ) return <Loading />

  return (
    <div >
      <Categories />
    </div>
  );
};

export default Home;
