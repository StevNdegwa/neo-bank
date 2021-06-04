import styled from "styled-components";

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:3;
grid-row-start:4;
grid-row-end:6;
background-color:white;
@media only screen and (max-width:1024px){
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:5;
    grid-row-end:6;
    height:200px;
}
`;
