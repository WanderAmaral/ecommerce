/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "@/config/firebase-config";
import React, { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";
import Link from "next/link";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import CustomInputContainer from "../components/input/custom-input";
import ErrorMessage from "../components/input/input-error-message";
import Button from "../components/button/button";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Loading from "../components/loading/loading.component";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export interface LoginUser {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  );

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginUser>();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  const onSubmit = async (data: LoginUser) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          window.location.href = "/";
        }
      });
    } catch (error) {
      console.log(error);
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError("email", { type: "invalidCredential" });
      }

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="h-full flex items-center justify-center mt-24">
      {/* LoginContainer */}
      <div className="flex flex-col items-center w-96">
        {/* LoginContent */}

        <p className="text-texto-dark font-semibold mb-5 text-rem">
          Entre com a sua conta
        </p>
        {/* LoginHeadline */}
        {/* LoginSubtitle */}

        <div className="w-full gap-2  max-h-11 bg-background-dark text-texto-white flex items-center justify-center rounded-lg  pt-5 pb-5 mt-5 font-semibold hover:bg-zinc-500 transition ease-in duration-300">
          <BsGoogle size={18} />
          <Button onClick={handleClickGoogleSignIn}>Entrar com o google</Button>
        </div>
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
