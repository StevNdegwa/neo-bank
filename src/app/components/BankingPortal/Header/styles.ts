import styled from "styled-components";
import { colors } from "../../../../styles/ds";

export const Wrapper = styled.header`
width:100%;
height:60px;
background-color:${colors.w};
display: flex;
justify-content:space-between;
lineHeight:60px;
box-shadow:0px 2px 2px ${colors.c_25};
`;

export const Action = styled.button`
height:100%;
padding:15px;
color: ${colors.v_100};
&>.neo-bank-react-icons{
    min-width:20px;
    height:100%;
    stroke-width:1;
}
`;