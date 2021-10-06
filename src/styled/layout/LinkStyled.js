import styled from "styled-components";

// Tem como colocar fonte dinamica
// Usando props ainda vou fazer isso 
const LinkStyled = styled.a`
    color: ${({ theme }) => theme.colors.cWatermelon};
    font-size: 20px;
    &:hover {
        opacity: 0.9;
    }
`
export default LinkStyled;