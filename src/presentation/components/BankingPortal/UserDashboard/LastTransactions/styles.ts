import styled from "styled-components";

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:3;
grid-row-start:2;
grid-row-end:4;
background-color:white;
@media only screen and (max-width:1024px){
    grid-column-start:3;
    grid-column-end:4;
    grid-row-start:5;
    grid-row-end:6;
    height:200px;
}
`;