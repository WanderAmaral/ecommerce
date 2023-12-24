import { FunctionComponent, ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode // ReactNode serve para falar ao typeScrpit que o children pode ser de qualquer tipo
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({children}) => {
  return (
    <div>
      <p className="w-full text-colors-error text-sm mt-1 text-error">{children}</p>
    </div>
  );
};

export default ErrorMessage;
