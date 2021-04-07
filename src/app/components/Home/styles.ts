import styled from "styled-components";

import { Grid } from "../../../styles/main";
import { colors } from "../../../styles/ds";

export const Wrapper = styled(Grid)`
grid-template-columns:70% 30%;
grid-template-rows:100%;
`;

export const Main = styled.div`
grid-column-start:1;
grid-column-end:2;
display:flex;
justify-content:center;
align-items:center;
background-color: ${colors.c_100_dark};
`;

export const Login = styled.div`
grid-colum-start:2;
display:flex;
justify-content:space-around;
align-items:center;
background-color: ${colors.c_10};
`;
