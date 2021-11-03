import React, { useState, useEffect } from "react";
import { Btn, CenterTitle } from "../../styled/pages/GuestStyled.js";
import { Row, Col, Container, Card } from "react-bootstrap";
import Http from "../../services/Api";

export default function ProjectPage() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    Http.get("/guests/display/").then((response) => setProjects(response.data));
  }, []);

  const { message } = projects;
  console.log(message);
  return (
    <>
      <Container>
        {/* Title */}
        <Row>
          <Col>
            <CenterTitle>Convidados</CenterTitle>
          </Col>
        </Row>
        {/* Page navigation */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Btn className="mx-5">Professores</Btn>
            <Btn className="mx-5">Convidados</Btn>
          </Col>
        </Row>
        {/* Guest List */}
        <Row>
          {message !== undefined
            ? message.map((array, index) => {
                return (
                  <Col className="py-4 mx-auto" sm={4} key={index}>
                    <Card
                      color="F57C00"
                      style={{ width: "16rem" }}
                      className="align-items-center"
                    >
                      <Card.Img
                        className="pt-4 rounded-circle"
                        style={{ width: "10rem" }}
                        variant="top"
                        src={array.pic}
                      />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {array.name}
                        </Card.Title>
                        <Card.Text className="mb-3">{array.role}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </>
  );
}
