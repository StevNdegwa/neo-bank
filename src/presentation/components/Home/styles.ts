import styled from "styled-components";

import { Grid } from "../../../styles/main";
import { colors } from "../../../styles/ds";

export const Wrapper = styled(Grid)`
grid-template-columns:70% 30%;
grid-template-rows:100%;
@media only screen and (max-width: 730px){
    grid-template-columns:100%;
    grid-template-rows:20% 80%;
}
`;

export const Main = styled.div`
grid-column-start:1;
grid-column-end:2;
display:flex;
justify-content:center;
align-items:center;
background-color: ${colors.c_100_dark};
@media only screen and (max-width: 730px){
    grid-column-start:1;
    grid-row-start:1;
    grid-row-end:2;
}
`;

export const Login = styled.div`
grid-colum-start:2;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
background-color: ${colors.c_10};
@media only screen and (max-width: 730px){
    grid-column-start:1;
    grid-row-start:2;
}
`;
