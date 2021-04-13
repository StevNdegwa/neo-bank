import styled from "styled-components";

import { colors } from "../../../../styles/ds";
import { Center } from "../../../../styles/main";

export const Wrapper = styled.div`
width:450px;
border-radius:15px;
overflow:hidden;
margin:auto;
box-shadow:0px 0px 5px ${colors.c_75};
`;

export const Header = styled.div`
width:100%;
height:120px;
user-select:none;
background-image:${colors.vertical_gradient};
&>div.rb-logo{
    padding-top: 10px;
    width: 100%;
    height: 70px;
    fill: ${colors.c_10};
}
&>div.text{
    width:100%;
    height:50px;
    text-align:center;
    line-height:50px;
    font-size:2em;
    font-weight:800;
    color:${colors.c_10};
}
`;

export const Form = styled.form`
width: 100%;
padding: 0.6em 1em;
background-color: ${colors.w};
`;

export const Info = styled(Center)`
min-height: 50px;
font-size: 1.3em;
font-weight: 300;
&>span.highlight{
    font-style: italic;
    color: ${colors.v_75};
}
`;

export const Spacer = styled.div`
width:100%;
height: ${(props:{ height: string; })=>props.height};
`