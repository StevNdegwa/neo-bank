import styled from "styled-components";

import { Grid, Link as L } from "../../../styles/main";

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
border:1px solid black;
`;

export const Login = styled.div`
grid-colum-start:2;
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;
`

export const Link = styled(L)`
margin-right:10px;
font-weight:600;
border-radius:23px;
min-width:80px;
`;