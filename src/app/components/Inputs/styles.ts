import styled from "styled-components";

import { colors } from "../../../styles/ds";

export const Input = styled.input`
display: inline-block;
width:100%;
padding-left:1em;
box-sizing:border-box;
&.auth{
    border: none;
    outline: none;
    border-bottom:1px solid ${colors.c_25};
    &:focus{
        border-bottom-width:2px;
    }
}
`;

export const Label = styled.label`
font-weight:600;
`