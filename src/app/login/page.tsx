import React from "react";
import Button from "../components/button";
import {BsGoogle} from 'react-icons/bs'

const LoginPage = () => {
  return (
    <div className="h-full flex items-center justify-center mt-40">
      {/* LoginContainer */}
      <div className="flex flex-col items-center w-96">
        {/* LoginContent */}

        <p className=" text-texto-dark font-semibold mb-20px text-rem">
          Entre com a sua conta
        </p>
        {/* LoginHeadline */}
        {/* LoginSubtitle */}
        <Button startIcon={<BsGoogle size={18}/>}>Entrar com o Google</Button>
        <p className="text-primary w-full p-4 mb-20  text-center font-medium  border-b border-black">
          ou entre com seu email
        </p>

        {/* LoginInputContainer */}
        <div className="w-full mb-20">
          <p className=" font-semibold mb-5">Label 1</p>
          <input className="w-full" />
        </div>

        <div className="w-full">
          <p className="font-semibold mb-5">Label 2</p>
          <input className="w-full" />
        </div>
        {/* End LoginInputContainer */}

        {/* Button */}
        {/* Add your button component or Tailwind CSS classes here */}
      </div>
    </div>
  );
};

export default LoginPage;
