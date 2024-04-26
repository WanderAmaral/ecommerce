import React, { FunctionComponent, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  startIcon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-r-lg  max-h-11 bg-blue-600 text-texto-white text-sm px-3 flex items-center justify-center  pt-5 pb-5 mt-5 font-semibold hover:bg-blue-800 transition ease-in duration-300"
    >
      {startIcon && (
        <div className="flex h-full items-center mr-8">{startIcon}</div>
      )}
      {children}
    </button>
  );
};

export default Button;
