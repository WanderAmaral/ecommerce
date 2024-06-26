"use client";
import Link from "next/link";

import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";

import { toggleCart } from "@/app/store/toolkit/cart/cart.slice";
import { useAppleSelector } from "@/hooks/redux.hooks";
import { selectProductCount } from "@/app/store/reducers/cart/cart-selector";
import { logoutUser } from "@/app/store/toolkit/user/user.slice";

const Header = () => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  const productCount = useAppleSelector(selectProductCount);

  const handleClickSignOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="  bg-background-dark w-full flex justify-between p-4 text-white shadow-xl">
      <div className="flex items-center">
        <Link href={"/"}>
          <h1 className="text-lg mr-4">Ecommerce</h1>
        </Link>{" "}
      </div>
      <div className="flex items-center gap-10">
        <div
          className="flex font-semibold text-sm cursor-pointer"
          onClick={handleCartClick}
        >
          <BsCart size={20} />
          <p className="ml-1">{productCount}</p>
        </div>
        <Link href={"/explore"}>
          <div className="font-semibold text-sm cursor-pointer">Explorar</div>
        </Link>
        {!isAuthenticated && (
          <Link href={"/login"}>
            <div className="font-semibold text-sm">Login</div>
          </Link>
        )}
        {isAuthenticated === true && (
          <div
            className="font-semibold text-sm cursor-pointer"
            onClick={handleClickSignOut}
          >
            Sair
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
