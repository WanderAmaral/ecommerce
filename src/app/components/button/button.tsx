import { cn } from "@/lib/utils";
import React, { FunctionComponent, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  startIcon,
  onClick,
  className
}) => {


  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={cn("w-full rounded-lg justify-center  items-center bg-black p-3 text-texto-white text-sm  flex  font-semibold  transition ease-in duration-300", className)}
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
