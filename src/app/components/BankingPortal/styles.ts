import styled from "styled-components";

import { colors } from "../../../styles/ds";
import { Center } from "../../../styles/main";

export const Content = styled.section`
width: calc(100% - 60px);
height:100%;
margin-left:60px;
`;

export const Main = styled.div`
width:100%;
height: calc(100% - 60px);
`;

export const Info = styled(Center)`
height:100%;
background-color:${colors.c_10};
`;