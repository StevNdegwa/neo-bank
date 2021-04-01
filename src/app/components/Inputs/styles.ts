import styled, { css } from "styled-components";

export const Input = styled.input`
display: inline-block;
width:100%;
padding-left:1em;
box-sizing:border-box;
${({ variant } : { variant?: string })=>{
    switch (variant) {
        case "auth":
            return css`
            border: none;
            outline: none;
            border-bottom:1px solid #D0D3D4;
            &:focus{
                border-bottom-width:2px;
            }
            `
        default:
            break;
    }
}}
`