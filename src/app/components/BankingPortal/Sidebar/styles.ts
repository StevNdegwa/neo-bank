import styled, { css } from "styled-components";
import { colors } from "../../../../styles/ds";

export const Wrapper = styled.div`
width:60px;
height:100%;
position:fixed;
z-index:600;
border:none;
background-color: ${colors.w};
${({ showing }:{ showing:boolean })=>showing && css`
    width:300px;
`}
`;

export const Action = styled.button`
width:60px;
height:60px;
line-height:60px;
&>.neo-bank-react-icons{
    width:30px;
    height:40px;
    color:${colors.c_10};
}
&:first-child{
    background-image:${colors.vertical_gradient};
    border-bottom:1px outset ${colors.c_10};
    border-right:1px outset ${colors.c_10};
}
`;

export const OverLay = styled.div`
position:absolute;
z-index:400;
top:0;
left:0;
width:100%;
height:100%;
display:none;
${({ show } : {show: boolean })=>show && css`
    display:block;
`}
`