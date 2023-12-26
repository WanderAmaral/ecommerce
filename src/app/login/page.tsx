"use client";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";
import Link from "next/link";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { googleProvider } from "@/config/firebase-config";

import CustomInputContainer from "../components/custom-input";
import ErrorMessage from "../components/input-error-message";
import Button from "../components/button";

export interface LoginUser {
  email: string;
  password: string;
}

export const userAdm = "wanderamaral013@gmail.com";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginUser>();

  const onSubmit = async (data: LoginUser) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log(userCredentials);
    } catch (error) {
      console.log(error);
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError("email", { type: "invalidCredential" });
      }

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }
    }
  };

  const handleClickGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);

      console.log(userCredential)
    } catch (error) {
      console.log(error);
    }
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

        <Button
        type="submit"
          startIcon={<BsGoogle size={18} />}
          onClick={handleClickGoogleSignIn}
        >
          Entrar com o Google
        </Button>

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

            {errors?.email?.type === "validate" && (
              <ErrorMessage>Por favor inserir um email valido</ErrorMessage>
            )}
          </div>

          <div className="w-full mb-5">
            <p className="font-semibold mb-5">Senha</p>
            <CustomInputContainer
              type="password"
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage>A senha é Obrigatório é Obrigatório</ErrorMessage>
            )}
            {errors?.email?.type &&
              errors?.password?.type === "invalidCredential" && (
                <ErrorMessage>O email ou senha esta incorreto</ErrorMessage>
              )}
          </div>
          <div>
            <Link href={"create-login"} className="border-b border-b-black">
              Criar conta
            </Link>
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
