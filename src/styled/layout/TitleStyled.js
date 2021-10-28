import styled from "styled-components";

const TitleStyled = styled.h1`
    color: ${(props) => props.color};
    font: ${(props) => `${props.font}px`};
`
export default TitleStyled