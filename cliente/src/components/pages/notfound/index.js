import React from "react";
import { Button, Container } from "react-bootstrap";


export default function NotfoundComponent() {
    return (
        <>
            <Container className="text-center p-5">
                <h1 className="h1">Pagina não foi achada :D</h1>
                <Button href="/" variant="outline-primary m-4"  >Retorna</Button>
            </Container>
        </>
    )
}