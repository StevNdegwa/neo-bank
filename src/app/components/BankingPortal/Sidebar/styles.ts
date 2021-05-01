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
    width:auto;
`}
`;

export const Drawer = styled.div`
min-width:240px;
height:100%;
`;


export const Actions = styled.div`
width:60px;
height:100%;
`;

export const Action = styled.button`
width:60px;
height:50px;
line-height:50px;
background-color:transparent;
&:first-child{
    height:60px;
    line-height:60px;
    background-image:${colors.vertical_gradient};
    color:${colors.w};
}
&>.neo-bank-react-icons{
    width:25px;
    height:30px;
    line-height:50px;
    color:${colors.c_25};
}
${({ active }: { active?: boolean }) => (active && css`
    &>.neo-bank-react-icons{
        color:inherit;
    }
`)}
`;

export const Dir = styled.div`
padding:5px;
& > div{
    height:40px;
    width:100%;
    display:flex;
    cursor:pointer;
    line-height:40px;
    font-size:1rem;
    font-weight:500;
    user-select:none;
    border-radius:10px;
    font-weight:600;
    padding:0 3px;
    &:hover{
        background-color:${colors.c_10};
    }
    &.history{
        height:40px;
        line-height:40px;
        color:${colors.c_10};
        background-color:${colors.c_50};
        font-weight:600;
        &>.icon{
            width:40px;
            text-align:center;
            &>.neo-bank-react-icons{
                height:40px;
                width:20px;
                line-height:40px;
            }
        }
    }
    &>div{
        width:100%;
    }
    &>.label{
        width:100%;
        padding:0 1em;
    }
    &>.icon{
        width:40px;
        &>.neo-bank-react-icons{
            height:40px;
            line-height:40px;
        }
    }
    & a{
        display:inline-block;
        width:100%;
        height:100%;
    }
}
`;

export const NeoBank = styled.div`
height:60px;
line-height:60px;
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
${({ show }: { show: boolean; }) => show && css`
    display:block;
`}
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