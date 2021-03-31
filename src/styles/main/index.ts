import styled from "styled-components";

export const Flex = styled.div`
display:flex;
flex-direction:${({ direction } : { direction?: "row" | "column" }) => direction || "row"};
`

export const Grid = styled.div`
display: grid;
`