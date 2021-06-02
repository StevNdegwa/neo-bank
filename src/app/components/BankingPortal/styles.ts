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

export const PortalGrid = styled.div`
width:100%;
height:100%;
display:grid; 
overflow:auto;
grid-template-columns:1fr 300px 800px 1fr;
grid-template-rows:1fr 70px 130px 170px 100px 1fr;  
grid-column-gap:20px;
grid-row-gap:20px;
@media only screen and (max-width:1024px){
    grid-template-columns:1fr 300px 600px 1fr;
    grid-template-rows:10px 70px 130px 170px 100px 1fr;      
}
`;