import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row } from "react-bootstrap";
import http from "../../../api";

// Css import

export default function LoginPage() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const loginSubmit = () => {
        http.post("/user/login", {
            email: email,
            password: password,
          }).then((response) => {
            alert(response)
          }).catch((err) => {alert(err)});
      };
    
    return (    
        <>
            <Container className="p-5 bg-light rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => { setEmail(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3 bg" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value); }} />
                    </Form.Group>
                    <Row className='container text-center p-2'>
                        <Link className='p-3' to="/cadastro">Não tem cadastrado?</Link>
                        <Button variant="outline-primary" onClick={loginSubmit}>Entrar</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}