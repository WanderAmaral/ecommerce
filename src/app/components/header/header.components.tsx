"use client";
import Link from "next/link";
import { useContext } from "react";

import { BsCart } from "react-icons/bs";
import { CartContext } from "@/contexts/cart.context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";
import { logoutUser } from "@/app/store/reducers/user/user.action";

const Header = () => {
  
  const {isAuthenticated} = useSelector((rootReducer: any) => rootReducer.userReducer)
  const dispatch = useDispatch()

  const {toggleCart} = useContext(CartContext)

  const handleClickSignOut = () => {
    dispatch(logoutUser())
    signOut(auth)
    
    
  };
  
  
  return (
    <div className="  bg-background-dark w-full flex justify-between p-4 text-white shadow-xl">
      <div className="flex items-center">
        <Link href={"/"}>
          <h1 className="text-lg mr-4">Ecommerce</h1>
        </Link>{" "}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex font-semibold text-sm cursor-pointer" onClick={toggleCart}>
          <BsCart size={20} />
          <p className="ml-1">5</p>
        </div>
        <Link href={"/explore"}>
        <div className="font-semibold text-sm cursor-pointer">Explorar</div>
        </Link>
        {!isAuthenticated && (<Link href={"/login"}>
          <div className="font-semibold text-sm">Login</div>
        </Link>)}
        {isAuthenticated === true && <div
          className="font-semibold text-sm cursor-pointer"
          onClick={handleClickSignOut}
        >
          Sair
        </div>}
        
      </div>
    </div>
  );
};

export default Header;
