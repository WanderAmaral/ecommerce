"use client";

import React from "react";
import Button from "../components/button";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import CustomInputContainer from "./components/custom-input";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/input-error-message";
import validator from "validator";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="h-full flex items-center justify-center mt-40">
      {/* LoginContainer */}
      <div className="flex flex-col items-center w-96">
        {/* LoginContent */}

        <p className="text-texto-dark font-semibold mb-5 text-rem">
          Entre com a sua conta
        </p>
        {/* LoginHeadline */}
        {/* LoginSubtitle */}
        <Button startIcon={<BsGoogle size={18} />}>Entrar com o Google</Button>
        <p className="text-primary w-full p-3 mb-8 text-center font-medium border-b border-black">
          ou entre com seu email
        </p>

        {/* LoginInputContainer */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full mb-5">
            <p className="font-semibold mb-5">E-mail</p>
            <CustomInputContainer
              hasError={!!errors?.email}
              placeholder="Digite seu email"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <ErrorMessage>O email é Obrigatório</ErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor inserir um email valido</ErrorMessage>
            )}
          </div>

          <div className="w-full mb-5">
            <p className="font-semibold mb-5">Senha</p>
            <CustomInputContainer
              hasError={!!errors?.email}
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage>A senha é Obrigatório é Obrigatório</ErrorMessage>
            )}
          </div>

          {/* End LoginInputContainer */}
          <Button type="submit" startIcon={<FiLogIn size={18} />}>
            Entrar
          </Button>
        </form>
        {/* Add your button component or Tailwind CSS classes here */}
      </div>
    </div>
  );
};

export default LoginPage;
