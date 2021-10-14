import styled from "styled-components";

// Warning using tag a 
const LinkStyled = styled.a`
    color: ${(props) => props.color};
    font-size: ${(props) => `${props.font}px`};
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;
    border-radius: 5px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.cOrange};
        border-radius: 5px;
    }
`

export default LinkStyled;