import React, { useState } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Http from '../../../api';

export default function RegisterPage() {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ enrollment, setEnrollment ] = useState('');
    let history = useHistory();

    const loginSubmit = () => {
        Http.post("/user/register", {
            email: email,
            password: password,
            enrollment: enrollment,
            cpf: cpf,
            name: name
        }).then((response) => {
            history.push('/login')
        }).catch((err) => { alert(err) });
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cpf</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                            onChange={(e) => { setCpf(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Matricula</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                            onChange={(e) => { setEnrollment(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                            onChange={(e) => { setName(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3 bg" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value); }} />
                    </Form.Group>
                    <Row className='container text-center p-2'>
                        <Link className='p-3' to="/login">Ja é cadastrado</Link>
                        <Button variant="outline-primary" onClick={loginSubmit}>Entrar</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}