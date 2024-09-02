"use client";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../app/components/header/header.components";
import Loading from "../../app/components/loading/loading.component";

type AuthenticationGuardProps = {
  children: JSX.Element;
};

const AuthenticationGuard = ({ children }: AuthenticationGuardProps) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  );

  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    );
  }

  return <>{children}</>;
};

export default AuthenticationGuard;
