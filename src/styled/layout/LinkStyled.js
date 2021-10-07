import styled from "styled-components";

// Tem como colocar fonte dinamica
// Usando props ainda vou fazer isso 
const LinkStyled = styled.a`
    color: ${({ theme }) => theme.colors.cBlue};
    font-size: ${(props) => `${props.font}px`};
    text-decoration: none;
    transition: 0.6s;
    border-radius: 5px;
    &:hover {
        opacity: 0.8;
        background-color: ${({ theme }) => theme.colors.cOrange};
        border-radius: 5px;
    }
`

export default LinkStyled;