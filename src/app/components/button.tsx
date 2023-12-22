import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ children, startIcon }) => {
  return (
    <button className="w-full max-h-11 bg-background-dark text-texto-white flex items-center justify-center rounded-lg pt-5 pb-5 mt-10 font-semibold hover:bg-zinc-500 transition ease-in duration-300">
      {startIcon && <div className="flex h-full items-center mr-8">{startIcon}</div>}
      {children}
    </button>
  );
};

export default Button;
