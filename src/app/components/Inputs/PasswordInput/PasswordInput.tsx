import React from "react";

import { Input } from "./styles";


export type PasswordInputProps = {
    name: string;
    label?: string;
    placeholder?: string;
    className?: string
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ 
        name, 
        label, 
        placeholder,
        className
    }, ref)=>{
   
    return (
        <>
            <label htmlFor={name}>{ label }</label>
            <Input ref={ref} name={name} type="password" className={`${className} auth`} placeholder={placeholder}/>
        </>
    )
})

export default PasswordInput;