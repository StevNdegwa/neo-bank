import styled from "styled-components";

export const Wrapper = styled.div`
width:800px;
margin:auto;
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
`

