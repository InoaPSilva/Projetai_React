import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Card,
  Button,
  Container,
  Image,
  Col,
  Row
} from "react-bootstrap";
//api import
import http from "../../services/Api";

export default function Projects() {
  const [projectData, setProjectState] = useState({});

  const { _id } = useParams();

  useEffect(() => {
    http.get(`/project/${_id}`).then((response) => {
      setProjectState(response.data.message[0]);
    });
  }, [_id]);
  const {user}  = projectData;
  console.log(user);
  return (
    <>
      <Container>
        <Image src={projectData.banner} fluid style={{ borderRadius: "5px" }} />
        <div>
          <hr />

          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" style={{ marginTop: "20px" }}>
              {" "}
              Apresentação
            </Button>
          </div>
          <hr />
          <Container>
            <h1
              className="h1"
              style={{ marginTop: "20px", marginBottom: "30px" }}
            >
              {projectData.title}
            </h1>
            <p style={{ marginTop: "20px", marginBottom: "30px" }}>
              {" "}
              {projectData.summary}
            </p>
            <p> {projectData.objective}</p>
          </Container>
        </div>
        <div>
          <h3
            className="h3"
            style={{ marginBottom: "20px", marginTop: "30px" }}
          >
            Participantes
          </h3>
          <Row>
            {user !== undefined
              ? user.map((array, index) => {
                  return (
                    <Col className="p-4" sm={4} key={index}>
                      <Card fluid style={{ margin: "8px" }}>
                        <Card.Body>
                          <Card.Title>{array.name}</Card.Title>
                          <Card.Text>
                            Duis deserunt ad veniam enim fugiat incididunt.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              : null}
          </Row>
        </div>
      </Container>
    </>
  );
}
