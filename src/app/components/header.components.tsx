"use client";

import Link from "next/link";

import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <div className="  bg-background-dark w-full flex justify-between p-4 text-white shadow-xl">
      {" "}
      {/* Header-container */}
      <div className="flex items-center">
        {" "}
        {/* Header-items-container */}
        <Link href={"/"}>
          <h1 className="text-lg mr-4">Ecommerce</h1>
        </Link>{" "}
        {/* header-title */}
      </div>
      <div className="flex items-center gap-10">
        {" "}
        {/* Header-items */}
        <div className="flex font-semibold text-sm">
          <BsCart size={20} />
          <p className="ml-1">5</p>
        </div>{" "}
        {/* Header-item */}
        <div className="font-semibold text-sm cursor-pointer">
          Explorar
        </div>{" "}
        {/* Header-item */}
        <Link href={"/login"}>
          <div className="font-semibold text-sm">Login</div>
        </Link>{" "}
        {/* Header-item */}
        <Link href={"create-login"}>
          <div className="font-semibold text-sm">Criar Conta</div>
        </Link>{" "}
        {/* Header-item */}
        <div className="font-semibold text-sm cursor-pointer">Sair</div>{" "}
        {/* Header-item */}
      </div>
    </div>
  );
};

export default Header;
