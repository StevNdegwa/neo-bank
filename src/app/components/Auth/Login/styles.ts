import styled from "styled-components";

import { colors } from "../../../../styles/ds";

export const Wrapper = styled.div`
width:450px;
border-radius:15px;
overflow:hidden;
margin:auto;
border:2px outset ${colors.c_10};
box-shadow:0px 0px 5px ${colors.c_75};
`;

export const Header = styled.div`
width:100%;
height:250px;
user-select:none;
background-image:${colors.vertical_gradient};
&>div.rb-logo{
    padding-top: 10px;
    width: 100%
    height: 200px;
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
width:100%;
padding:0.6em 1em;
& a{
    color: ${colors.v_100_dark};
    font-weight: 600;
}
`;