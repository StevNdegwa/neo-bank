import React from "react";

import { Input, Label } from "./styles";

export type TextInputProps = {
    name: string;
    type?: "text" | "email";
    label: string;
    variant?: string;
    placeholder?: string;
    className?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ 
        name, 
        type = "text", 
        label, 
        className, 
        placeholder 
    }, ref)=>{
    return (
        <>
            <Label htmlFor={name}>{ label }</Label>
            <Input ref={ref} type={ type } name={name} className={className} placeholder={placeholder} />
        </>
    )
})

export default TextInput;