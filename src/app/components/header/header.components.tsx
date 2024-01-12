"use client";

import { auth } from "@/config/firebase-config";
import { UserContext } from "@/contexts/user.context";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";

import { BsCart } from "react-icons/bs";
import Cart from "../cart/cart.components";
import { CartContext } from "@/contexts/cart.context";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  const {toggleCart} = useContext(CartContext)

  const handleClickSignOut = () => {
    signOut(auth);
    window.location.reload();
    window.location.href = "/";
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
