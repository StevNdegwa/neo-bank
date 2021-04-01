import styled, { css } from "styled-components";

import { Link as L } from "react-router-dom";

export const Flex = styled.div`
display:flex;
flex-direction:${({ direction } : { direction?: "row" | "column" }) => direction || "row"};
width:100%;
height:100%;
`

export const Grid = styled.div`
display: grid;
width:100%;
height:100%;
`

export const Link = styled(L)`
border:1px solid black;
text-decoration:none;
color:inherit;
${({ variant } : { variant?: string })=>{
    switch (variant) {
        case "button":
            return css`
            display:inline-block;
            padding:0.8em 1em;
            text-align:center;
            `
        default:
            break;
    }
}}
`

export const Center = styled(Flex)`
justify-content: center;
align-items: center;
`