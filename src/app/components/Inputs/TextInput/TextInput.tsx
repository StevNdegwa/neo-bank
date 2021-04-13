import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = {
  name: string;
  register: UseFormRegisterReturn;
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const TextInput: React.FC<TextInputProps> = (
  { name, type = "text", label, className, placeholder, register, disabled, defaultValue }
) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default TextInput;
