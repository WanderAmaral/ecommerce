import React, { FunctionComponent, InputHTMLAttributes } from "react";

// Styles
// Remova a importação de styled-components

// Remova a exportação de CustomInputContainer

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    const { hasError, ...restProps } = props;

    const inputClasses = `w-full bg-input-background ${
      hasError ? "border-2 border-error" : "border-none"
    } p-2 box-border rounded-md text-text-dark focus:outline-none `;

    return <input {...restProps} ref={ref as any} className={inputClasses} />;
  }
);

CustomInput.displayName = "CustomInput";



export default CustomInput;
