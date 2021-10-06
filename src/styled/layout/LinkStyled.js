import styled from "styled-components";

// Tem como colocar fonte dinamica
// Usando props ainda vou fazer isso 
const LinkStyled = styled.a`
    color: ${({ theme }) => theme.colors.cWatermelon};
    font-size: ${(props) => `${props.font}px`};
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`
export default LinkStyled;