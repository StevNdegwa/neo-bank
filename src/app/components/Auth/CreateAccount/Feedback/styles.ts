import styled from "styled-components";
import { colors } from "../../../../../styles/ds";

export const Wrapper = styled.div`
width:500px;
padding:10px;
`;

export const Header = styled.header`
width:100%;
height:60px;
display:flex;
justify-content:center;
line-height:60px;
font-size:1.2em;
font-weight:600;
& .neo-bank-react-icons{
    width:30px;
    height:60px;
}
`;

export const Main = styled.main`
width:100%;
min-height:100px;
text-align:center;
&>div.greeting{
    font-size:1.1rem;
}
&>p.userId{
    font-size:1.5rem;
    line-height:100px;
    &>span{
        font-weight:600;
        font-style:italic;
        color:${colors.v_75};
    }
}
`;

export const Footer = styled.footer`
width:100%;
height:50px;
text-align:center;
`;