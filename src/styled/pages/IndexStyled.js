import styled from "styled-components";
import Background from "../../assets/background/BackgroundIndex.png";

// import Picth from '../../assets/background/pitch.jpg';
/* background-image: url(${Picth}); */
export const MainSectionStyled = styled.section`
    background-image: Background;
    background-color: ${({ theme }) => theme.colors.cOrange};
    padding: 40px 0;
`

export const Title = styled.h1`

`