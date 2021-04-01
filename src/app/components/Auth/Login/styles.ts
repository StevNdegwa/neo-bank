import styled from "styled-components";

export const Wrapper = styled.div`
width:450px;
border-radius:15px;
overflow:hidden;
margin:auto;
border:2px outset #7b7d7d;
box-shadow:0px 0px 5px #ecf0f1;
`;

export const Header = styled.div`
width:100%;
height:250px;
user-select:none;
background-color:#f7f7f7;
&>div.rb-logo{
    width:100%
    height:200px;
}
&>div.text{
    width:100%;
    height:50px;
    text-align:center;
    line-height:50px;
    font-size:1.5em;
    font-weight:600;
}
`;

export const Form = styled.form`
width:100%;
padding:0.6em 1em;
`;