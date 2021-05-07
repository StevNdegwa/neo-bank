import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:250px 300px 900px calc(100% - 1450px);
grid-template-rows:100px 70px 130px 170px 100px 20%;  
grid-column-gap:20px;
grid-row-gap:20px; 
overflow:auto;
`;