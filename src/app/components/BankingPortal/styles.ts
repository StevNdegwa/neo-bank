import styled from "styled-components";

import { colors } from "../../../styles/ds";
import { Center } from "../../../styles/main";

export const Header = styled.header`
width:100%;
height:60px;
background-color:${colors.w};
box-shadow:0px 2px 2px ${colors.c_25};
`;

export const Content = styled.section`
width: calc(100% - 60px);
height:100%;
`;

export const Main = styled.div`
width:100%;
height: calc(100% - 60px);
`;

export const Info = styled(Center)`
height:100%;
background-color:${colors.c_10};
`;