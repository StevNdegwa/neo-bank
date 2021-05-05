import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../../styles/ds";


export const Wrapper = styled(motion.div)`
width:auto;
height:100%;
position:absolute;
z-index:600;
display:flex;
user-select:none;
font-weight:600;
background-color: ${colors.w};
`;

export const Drawer = styled.div`
width:0px;
height:100%;
min-width:0px;
overflow:hidden;
transition: width 500, min-width 500;
${({ showing }: { showing: boolean }) => showing && css`
    min-width:240px;
    width:auto;
`}
`;

export const Actions = styled.div`
width:60px;
height:100%;
box-shadow:2px 0px 2px ${colors.c_10};
`;

export const Action = styled.button`
width:60px;
height:50px;
line-height:50px;
background-color:transparent;
text-align:center;
&:first-child{
    height:60px;
    line-height:60px;
    background-image:${colors.vertical_gradient};
    color:${colors.w};
    &>.neo-bank-react-icons{
        width:30px;
        height:30px;
        line-height:60px;
        color:${colors.w};
        transition:height 200;
    }
    &:hover{
        &>.neo-bank-react-icons{
            height:40px;
        }
    }
}
&>.neo-bank-react-icons{
    width:25px;
    height:30px;
    line-height:50px;
    color:${colors.c_25};
}
${({ active } : { active?: boolean }) => (
    active && css`
        &>.neo-bank-react-icons{
            color:inherit;
        }
    `)
}
`;

export const Dir = styled.div`
padding:5px;
&>div{
    height:40px;
    display:flex;
    cursor:pointer;
    line-height:40px;
    font-size:1rem;
    border-radius:5px;
    padding:0 3px;
    color:${colors.v_100};
    transition: background-color 100;
    &:hover{
        background-color:${colors.c_10};
    }
    &.history{
        color:${colors.c_10};
        background-color:${colors.c_50};
        border:1px outset ${colors.c_50};
    }
    &>.label{
        width:100%;
        padding:0 1em;
    }
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
`;

export const NeoBank = styled.div`
height:60px;
line-height:60px;
text-align:center;
font-size:2rem;
font-weight:800;
text-shadow:0px 0px 2px ${colors.w};
background-image:${colors.vertical_gradient};
color:${colors.w};
`;