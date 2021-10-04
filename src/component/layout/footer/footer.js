import React from "react";

import { Col, Container } from "react-bootstrap";
import { DivStyled, RowStyled } from "./styledFooter";

// FooterComponent
export default function FooterComponent() {
    return (
        <>
            <DivStyled color="212121">
                <Container>
                    <RowStyled  className="text-white text-center p-4">
                        <Col>
                            <h1>Time de desenvolvimento: </h1>
                        </Col>
                        <Col>
                            <h2 className="h2">Menu</h2>
                            <p>
                                Página Inicial<br />
                                Programação <br />
                                Projetos <br />
                                Participantes</p>
                        </Col>
                        <Col>
                            <h2 className="h2">Menu</h2>
                            <p>
                                Página Inicial<br />
                                Programação <br />
                                Projetos <br />
                                Participantes</p>
                        </Col>
                        <Col xs={12} className='text-center pt-3'>
                            <h4 className="h4">®Projetaí 2021 - All Rights Reserved.</h4>

                        </Col>
                    </RowStyled>
                </Container>
            </DivStyled>
        </>
    )
}