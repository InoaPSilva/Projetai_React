import styled from "styled-components";

// Warning using tag a 
const LinkStyled = styled.a`
    color: ${({ theme }) => theme.colors.cPurple};
    font-size: ${(props) => `${props.font}px`};
    font-weight: bold;
    text-decoration: none;
    transition: 0.5s;
    border-radius: 5px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.cOrange};
        border-radius: 5px;
    }
`

export default LinkStyled;