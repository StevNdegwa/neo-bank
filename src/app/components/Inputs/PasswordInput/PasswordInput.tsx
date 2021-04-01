import React, { useState } from "react";

import { Input } from "./styles";


export type PasswordInputProps = {
    name: string;
    label?: string;
    placeholder?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ 
        name, 
        label, 
        placeholder 
    }, ref)=>{
   
    return (
        <>
            <label htmlFor={name}>{ label }</label>
            <Input ref={ref} name={name} type="password" variant="auth" placeholder={placeholder}/>
        </>
    )
})

export default PasswordInput;