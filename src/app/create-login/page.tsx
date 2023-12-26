"use client";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "@/config/firebase-config";
import { auth } from "@/config/firebase-config";
import { addDoc, collection } from "firebase/firestore";

import CustomInput from "../components/custom-input";
import Button from "../components/button";
import ErrorMessage from "../components/input-error-message";

interface SignUpForm {
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
    } catch (error) {
      console.log(error);
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
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Senha</p>
            <CustomInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage>Por favor digitar a senha</ErrorMessage>
            )}
          </div>
          <div className="w-full mt-5">
            <p className="font-semibold mb-2">Confirmar senha</p>
            <CustomInput
              placeholder="Confirmar senha"
              type="password"
              {...register("passwordConfirmation")}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <ErrorMessage>Por favor Confirme sua senha</ErrorMessage>
            )}
          </div>
          <Button startIcon={<FiLogIn />}>Criar Conta</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateLogin;
