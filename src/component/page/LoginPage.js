import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Form, Button, Row } from "react-bootstrap";
import { FormContainerStyled } from "../../styled/pages/LoginStyled";
// Css import
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);

    return (
        <>
            <FormContainerStyled className="p-5 m-5 bg-light rounded">
                <Form className="Row">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => { setEmail(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value); }} />
                    </Form.Group>
                    <Row className='container text-center p-2'>
                        <Link className='p-3' to="/register">Não tem cadastrado?</Link>
                        <Button variant="outline-primary" onClick={handleLogin([email, password])}>Entrar</Button>
                    </Row>
                </Form>
            </FormContainerStyled>
        </>
    )
}
