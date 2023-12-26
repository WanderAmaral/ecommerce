import { FunctionComponent } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";

const Home: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  return (
    <div>
      <Categories />
    </div>
  );
};

export default Home;
