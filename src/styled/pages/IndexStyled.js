import styled from "styled-components";
import Background from "../../assets/background/BackgroundIndex.png";

/* background-image: url(${Picth}); */
export const MainSectionStyled = styled.section`
    background-image: url(${Background});
    background-color: ${(props) => props.color};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 0;
`;

export const SectionAlunos = styled.section`
    background-color: ${(props) => props.color};
`;

export const SectionEmpresas = styled.section`

`;
export const SectionTime = styled.div`
    background-color: #F4F9F9;
`;

export const ContainerMain = styled.section`

`;