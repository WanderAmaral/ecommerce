"use client";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { auth, db } from "@/config/firebase-config";
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import CustomInput from "../components/input/custom-input";
import Button from "../components/button/button";
import ErrorMessage from "../components/input/input-error-message";

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const CreateLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit = async (data: SignUpForm) => {
    try {
      const userCrenditials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log({ userCrenditials });
      await addDoc(collection(db, "users"), {
        id: userCrenditials.user.uid,
        fisrtName: data.firstName,
        lastName: data.lastName,
        email: userCrenditials.user.email,
      });
      onAuthStateChanged(auth, (user) => {
        if(user) {
          window.location.href = "/"
        }
      })
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", { type: "alreadyInUse" });
      }
    }
  };

  return (
    <div className="flex justify-center mt-40 h-full">
      <div className="flex flex-col items-center w-96 mb">
        <p className="text-texto-dark font-semibold text-rem border-b border-b-zinc-600 w-full justify-center flex h-16">
          Criar Conta
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Nome</p>
            <CustomInput
              hasError={!!errors?.firstName}
              placeholder="Digite seu nome"
              {...register("firstName", { required: true })}
            />
            {errors?.firstName?.type === "required" && (
              <ErrorMessage>Por favor digitar o nome</ErrorMessage>
            )}
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Sobrenome</p>
            <CustomInput
              placeholder="Digite seu sobrenome"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <ErrorMessage>Por favor digitar o sobrenome</ErrorMessage>
            )}
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">E-mail</p>
            <CustomInput
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            />
            {errors?.email?.type === "required" && (
              <ErrorMessage>Por favor digitar o email</ErrorMessage>
            )}
            {errors?.email?.type === "alreadyInUse" && (
              <ErrorMessage>O e-mail já esta em uso!</ErrorMessage>
            )}
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Senha</p>
            <CustomInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage>Por favor digitar a senha</ErrorMessage>
            )}
            {errors?.password?.type === "minLength" && (
              <ErrorMessage>
                A senha deve conter no minimo 6 digitos
              </ErrorMessage>
            )}
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Confirmar senha</p>
            <CustomInput
              placeholder="Confirmar senha"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                minLength: 6,
              })}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <ErrorMessage>Por favor Confirme sua senha</ErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === "minLength" && (
              <ErrorMessage>
                A senha deve conter no minimo 6 digitos
              </ErrorMessage>
            )}
          </div>
          <Button startIcon={<FiLogIn />}>Criar Conta</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateLogin;
