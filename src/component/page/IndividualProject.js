import React, { useState } from "react";
import { useParams } from "react-router";
import { Card, CardGroup, Button, Container, Image } from "react-bootstrap";
//api import
import http from "../../services/Api"



export default function Projects(){

    const [projectData, setProjectState] = useState({});
    const [userData, setUserState] = useState({});
    
    const { _id } = useParams();

    let n = 0;
    
    http.get("project/" + _id)
      .then((response) => {
        setProjectState(response.data.message[0])
        setUserState(response.data.message[0].user[n])

        })
      .catch((err) => {
        console.warn("ops! ocorreu um erro" + err);
     });

    return(
        <>
            <Container>   
                <Image src={projectData.banner} fluid style={{borderRadius: '5px'}}/>
                <div>
                    <hr />
                        
                    <div className="d-grid gap-2">
                        <Button variant='dark' size='lg' style={{marginTop:'20px'}} > Apresentação</Button>
                    </div>
                    <hr />
                    <Container>
                    <h1 className="h1" style={{marginTop: '20px', marginBottom: '30px'}}>{projectData.title}</h1>
                    <p style={{marginTop: '20px', marginBottom: '30px'}}> {projectData.summary}</p>
                    <p> {projectData.objective}</p>
                    </Container>
                    
                </div>
                <div>
                    <h3 className="h3" style={{marginBottom: '20px', marginTop: '30px'}}>Participantes</h3>
                    <CardGroup>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Body>
                            <Card.Title>{userData.name}</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Body>
                            <Card.Title>Participante_2</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Body>
                            <Card.Title>Participante_3</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </div>
            </Container>
        </>
    )
}


