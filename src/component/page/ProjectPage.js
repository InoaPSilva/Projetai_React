import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, ListGroup, Container } from 'react-bootstrap';
import Http from '../../services/Api';

export default function ProjectPage() {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        Http.get("/project").then((response) => setProjects(response.data))
    }, []);

    const { message } = projects;
    console.log(message);
    return (
        <>
            <Row className="p-0 m-0">
                <Col xl="3" color="0288D1" >
                    <Container className="p-5">
                        <ListGroup>
                            <ListGroup.Item>1ª Periodo</ListGroup.Item>
                            <ListGroup.Item>2ª Periodo</ListGroup.Item>
                            <ListGroup.Item>3ª Periodo</ListGroup.Item>
                            <ListGroup.Item>4ª Periodo</ListGroup.Item>
                            <ListGroup.Item>5ª Periodo</ListGroup.Item>
                        </ListGroup>
                    </Container>
                </Col>
                <Col xl="9" color="7B1FA2">
                    <Row>
                        {message !== undefined ? message.map((array, index) => {
                            return (
                                <Col className="p-4 " key={index}>
                                    <Card color="F57C00" style={{ width: '16rem' }} className="align-items-center">
                                        <Card.Img className="pt-4 rounded-circle" style={{ width: '10rem' }} variant="top" src={array.icon} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{array.title}</Card.Title>
                                            <Card.Text className="mb-3">{array.summary}
                                            </Card.Text>
                                            <Button href={"/projeto/" + array._id } variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        }) : null}
                    </Row>
                </Col>
            </Row>
        </>
    )
}