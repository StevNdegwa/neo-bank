import styled from "styled-components";

export const Flex = styled.div`
display:flex;
flex-direction:${({ direction } : { direction?: "row" | "column" }) => direction || "row"};
width:100%;
height:100%;
`

export const Grid = styled.div`
display: grid;
width:100%;
height:100%;
`

export const Center = styled(Flex)`
justify-content: center;
align-items: center;
`;