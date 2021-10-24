import styled from "styled-components";

// Warning using tag a 
const LinkStyled = styled.a`
    color: ${(props) => props.color};
    font-size: ${(props) => `${props.font}px`};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 5px solid white;
    transition: ease-in 0.4s;
    transition-duration: 0.5s;
    
    &:hover {

        color: ${(props) =>  props.colorLink};
        border-color: ${(props) => props.colorDecoration};
    }
`;

export default LinkStyled;