import React, { useEffect, useRef } from "react";
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
  autoFocus?:boolean;
};

const TextInput: React.FC<TextInputProps> = (
  { name, type = "text", label, className, placeholder, register, disabled, defaultValue, autoFocus }
) => {
  let { ref, ...props } = register;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    if(autoFocus && inputRef.current){
      inputRef.current?.focus();
    }
  }, [ autoFocus, inputRef ]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        aria-label={label}
        {...props}
        ref={(el)=>{
          ref(el);
          inputRef.current = el;
        }}
      />
    </>
  );
};

export default TextInput;
