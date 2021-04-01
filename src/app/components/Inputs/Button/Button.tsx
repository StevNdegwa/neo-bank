import React, { MouseEventHandler } from "react";

export type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type })=>{
    
    return (
        <button onClick={onClick} type={type}>
            { children }
        </button>
    )
}

export default Button;