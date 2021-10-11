import styled from "styled-components";

const TitleStyled = styled.h1`
    color: ${({ theme }) => theme.colors.cBlack};
    font: ${(props) => `${props.font}px`};
`
export default TitleStyled