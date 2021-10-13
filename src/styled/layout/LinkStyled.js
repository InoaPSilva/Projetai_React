import styled from "styled-components";

// Warning using tag a 
const LinkStyled = styled.a`
    color: ${({ theme }) => theme.colors.cBlue};
    font-size: ${(props) => `${props.font}px`};
    text-decoration: none;
    transition: 0.6s;
    border-radius: 5px;
    &:hover {
        opacity: 0.9;
        background-color: ${({ theme }) => theme.colors.cOrange};
        border-radius: 5px;
    }
`

export default LinkStyled;