import React from "react";
import Button from "../components/button";
import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import CustomInputContainer from "./components/custom-input";
import { useForm } from "react-hook-form";


interface Users {
  email: string,
  password: string
}


const LoginPage = () => {
  const {register, formState: {errors}, handleSubmit} = useForm<Users>()
  

  const handleClickSubmit = (data: any) => {
    console.log({data})
  }

  console.log({errors})
  return (
    
    <div className="h-full flex items-center justify-center mt-40">
      {/* LoginContainer */}
      <div className="flex flex-col items-center w-96">
        {/* LoginContent */}

        <p className=" text-texto-dark font-semibold mb-5 text-rem">
          Entre com a sua conta
        </p>
        {/* LoginHeadline */}
        {/* LoginSubtitle */}
        <Button startIcon={<BsGoogle size={18}/>}>Entrar com o Google</Button>
        <p className="text-primary w-full p-3 mb-8  text-center font-medium  border-b border-black">
          ou entre com seu email
        </p>

        {/* LoginInputContainer */}
        <div className="w-full mb-5">
          <p className=" font-semibold mb-5">Usuário</p>
          <CustomInputContainer placeholder="Digite seu email" {...register('email', {required: true})}/>
        </div>

        <div className="w-full">
          <p className="font-semibold mb-5">Senha</p>
          <CustomInputContainer placeholder="Digite sua senha" {...register('password', {required: true})}/>
        </div>
        {/* End LoginInputContainer */}

        <Button startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleClickSubmit)()}>Entrar</Button>
        {/* Add your button component or Tailwind CSS classes here */}
      </div>
    </div>
    
  );
};

export default LoginPage;
