import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Http from "../../../api";

export default function BoardPage() {

    const [projects, setProjects] = useState({});
    useEffect(() => {
        Http.get("/project/list").then((response) => setProjects(response.data))
    }, []);
    
    const { message } = projects;
    
    return (
        <>
            <Container>
                <div className="text-center h1">
                    <h1>Banca De Participantes</h1>
                    <div className="p-5">
                        <Link to="#"><Button className="m-5 p-4" variant="outline-primary">Convidados</Button></Link>
                        <Link to="#"><Button className="m-5 p-4" variant="outline-primary">Professores</Button></Link>
                    </div>
                </div>
                <section >
                    <Row>
                        {message !== undefined ? message.map((array, index) => {
                            return (
                                <Col className="p-4 " key={index}>
                                    <Card style={{ width: '16rem' }} className="align-items-center">
                                    <Card.Img style={{ width: '10rem' }} variant="top" src={array.icon} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{array.name}</Card.Title>
                                            <Card.Text className="mb-3">
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button  variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        }) : null}
                    </Row>
                </section>
            </Container>
        </>
    )
}