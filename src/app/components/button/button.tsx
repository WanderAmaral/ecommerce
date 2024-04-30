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
    <div>
      <button
        onClick={onClick}
        className="w-full rounded-lg justify-center  items-center bg-black p-3 text-texto-white text-sm  flex  font-semibold  transition ease-in duration-300"
      >
        {startIcon && (
          <div className="flex h-full items-center mr-3">{startIcon}</div>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
