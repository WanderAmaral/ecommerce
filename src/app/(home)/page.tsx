"use client";
import { FunctionComponent, useEffect } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import Button from "../components/button";


const Home: FunctionComponent = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  const { adminUser, isAdministrador } = useContext(UserContext);


  return (
    <div>
      <Categories />

      {isAdministrador === true && <Button>Clique-me</Button>}
    </div>
  );
};

export default Home;
