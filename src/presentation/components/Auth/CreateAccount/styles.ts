import styled from "styled-components";

export const Wrapper = styled.div`
width:800px;
margin:auto;
@media only screen and (max-width:850px){
    width:100%;
}
`

export const Form = styled.form`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:10px;
&>div{
    width:380px;
    margin-bottom:15px;
    &:last-child{
        width:100%;
    }
}
@media only screen and (max-width: 850px){
    padding:3px;
    &>div{
        width:100%;
    }
}
`

