import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../../styles/ds";


export const Wrapper = styled(motion.div)`
width:60px;
height:100%;
position:absolute;
z-index:600;
border:none;
display:flex;
overflow:hidden;
background-color: ${colors.w};
${({ showing }: { showing: boolean }) => showing && css`
    width:300px;
`}
`;

export const Actions = styled.div`
width:60px;
height:100%;
border-right:1px inset ${colors.c_25};
`;

export const Drawer = styled.div`
width:240px;
height:100%;
`;


export const Dir = styled.div`
height:50px;
width:100%;
border-bottom:1px inset ${colors.c_25};
cursor:pointer;
line-height:50px;
font-size:1.2rem;
font-weight:500;
user-select:none;
padding-left:10px;
&:hover{
    background-color:${colors.c_25};
}
`;

export const NeoBank = styled(Dir)`
height:60px;
background-image:${colors.vertical_gradient};
color:${colors.w};
text-align:center;
font-size:2rem;
font-weight:800;
text-shadow:0px 0px 2px ${colors.w};
`;

export const MainLinks = styled.ul`
width:100%;
display:none;
${({ show }:{ show:boolean; })=>show && css`
    display:block;
`}
`;

export const DirLinks = styled.ul`
width:100%;
display:none;
&>li{
    height:50px;
    line-height:50px;
    border-bottom:1px inset ${colors.c_10};
    &>a{
        display:inline-block;
        width:100%;
        height:100%;
        padding-left:10px;
        &:hover{
            background-color:${colors.c_10};
            box-shadow: 0px 0px 2px inset ${colors.c_25};
        }
    }
}
${({ show }:{ show:boolean; })=>show && css`
    display:block;
`}
`;

export const Action = styled.button`
width:60px;
height:60px;
line-height:60px;
background-color:transparent;
&:first-child{
    background-image:${colors.vertical_gradient};
    border-bottom:1px inset ${colors.c_25};
    color:${colors.w};
}
&>.neo-bank-react-icons{
    width:30px;
    height:40px;
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
background-color:rgba(0,0,0,0.5);
${({ show }: { show: boolean }) => show && css`
    display:block;
`}
`