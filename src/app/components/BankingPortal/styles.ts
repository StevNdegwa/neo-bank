import styled, { css } from "styled-components";

import { colors } from "../../../styles/ds";
import { Center } from "../../../styles/main";

export const Content = styled.section`
width: calc(100% - 60px);
height:100%;
margin-left:60px;
`;

export const Main = styled.div`
width:100%;
height: calc(100% - 60px);
`;

export const Info = styled(Center)`
height:100%;
background-color:${colors.c_10};
`;

export const OverLay = styled.div`
position:absolute;
z-index:400;
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