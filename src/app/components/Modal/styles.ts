import styled, { css } from "styled-components";
import { colors } from "../../../styles/ds";

export const Overlay = styled.div`
position:absolute;
z-index:600;
top:0;
left:0;
width:100%;
height:100%;
display:none;
background-color:rgba(0,0,0,0.5);
justify-content:center;
align-items:center;
${({ show }: { show: boolean }) => show && css`
    display:flex;
`}
`;

export const Content = styled.div`
background-color: ${colors.w};
box-shadow: 0px 0px 8px 18px ${colors.c_75};
border-radius:8px;
`;