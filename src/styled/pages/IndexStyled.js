import styled from "styled-components";
import Background from "../../assets/background/BackgroundIndex.png";

/* background-image: url(${Picth}); */
export const MainSectionStyled = styled.section`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.cOrange};
    padding: 40px 0;
`;