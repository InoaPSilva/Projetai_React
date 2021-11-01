import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import TitleStyled from "../../styled/layout/TitleStyled";
import { ThemeContext } from "styled-components";
import { darken } from "polished"


export default function NotFoundPage() {
    const { colors } = useContext(ThemeContext);

    return (
        <div>
            <Container className="mt-5 text-center">
                <TitleStyled color={darken(0.3, colors.cBlue)}>Essa pagina não existe :O </TitleStyled>
            </Container>
        </div>

    )
}