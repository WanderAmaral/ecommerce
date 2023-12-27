'use client'
import { FunctionComponent } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";

const Home: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  const {currentUser} = useContext(UserContext)  
  console.log({currentUser})

  return (
    <div>
      <Categories />
    </div>
  );
};

export default Home;
