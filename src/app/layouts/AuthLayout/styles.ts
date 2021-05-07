import styled from "styled-components";
import { colors } from "../../../styles/ds";

export const Wrapper = styled.div`
width: 100%;
height: 100%;
`;

export const Header = styled.header`
position:relative;
z-index:500;
width:100%;
height:80px;
box-shadow: 0px 2px 5px ${colors.c_10};
`;

export const Main = styled.div`
padding:2em;
width:100%;
height:calc(100% - 130px);
background-color: ${colors.c_2};
`;

export const Footer = styled.footer`
width: 100%;
height: 50px;
background-color:${colors.c_100};
`;

export const Action = styled.button`
height:100%;
&>.neo-bank-react-icons{
    width:40px;
    height:60px;
    background-color:transparent;
    transition: background-color 200;
    &:hover{
        background-color:${colors.c_10};
    }
}
`;