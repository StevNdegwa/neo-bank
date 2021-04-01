import React from "react";

import { Input } from "./styles";

export type TextInputProps = {
    name: string;
    type?: "text" | "email";
    label: string;
    variant?: string;
    placeholder?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ 
        name, 
        type = "text", 
        label, 
        variant, 
        placeholder 
    }, ref)=>{
    return (
        <>
            <label htmlFor={name}>{ label }</label>
            <Input ref={ref} type={ type } name={name} variant={variant} placeholder={placeholder} />
        </>
    )
})

export default TextInput;