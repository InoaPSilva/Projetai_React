import React from "react";
import { Link } from "react-router-dom";

// StyledComponent and React Booststrap 
import { Container, Col, Row, Image, Button, Carousel, Card } from "react-bootstrap";
import { MainSectionStyled } from '../../../styled/pages/IndexStyled.js'

// Lists 
import { ListTime } from "./listTime";
import { ListCompanies } from "./listEmpresas";
import { ListCarrosel } from "./listCarrosel";
import { ListAlunos } from "./listAlunos";

// imagens
import LogoSenac from '../../../assets/logo/empresas/logoSenac.svg'
import Pitch from '../../../assets/background/pitch.jpg';
import LinkStyled from "../../../styled/layout/LinkStyled.js";
import TitleStyled from "../../../styled/layout/TitleStyled.js";


export default function IndexPage() {
    return (
        <>
            <MainSectionStyled img={Pitch}>
                <Container className="text-center" >
                    <Image src={LogoSenac} height="100px" className="ml-auto" />
                    <p className="pt-2">Faculdade Senac Pernambuco</p>
                </Container>
                <Carousel className="p-5" >
                    {ListCarrosel.map((iten, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <Container>
                                    <Row>
                                        <Col xs={8} className="m-auto" md={5}>
                                            <TitleStyled >{iten.title}</TitleStyled>
                                            <hr className="rounded" />
                                            <p>{iten.description}</p>
                                        </Col>
                                        <Col xs={6} md={2} />
                                        <Col xs={8} md={5} className="text-center" >
                                            <Image src={iten.img} className="p-5" fluid />
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </MainSectionStyled>

            {/* Empresas */}
            <Container>
                <div>
                    <h3 className="h3 mt-5">No que afeta os alunos?</h3>
                    <hr />
                </div>
                <Row>
                    {ListAlunos.map((array, index) => {
                        return (
                            <Col key={index} className="p-5 m-4">
                                <Image className="rounded p-4" src={array.img} fluid />
                                <h5 className="h5">{array.title}</h5>
                                <p>{array.description}</p>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Container>
                <div>
                    <div>
                        <h3 className="h3 mt-5">As Empresas Conosco</h3>
                        <hr />
                    </div>
                    <Row>
                        {ListCompanies.map((item, index) => {
                            return (
                                <Col key={index} xs={6} md={4}>
                                    <Link to={item.link} className="align-items-center "> 
                                        <Image
                                            style={{ height: "15rem" }}
                                            className="p-4 "
                                            src={item.Image}
                                            alt={item.title}
                                            >
                                        </Image>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>
            <Container>
                <div>
                    <LinkStyled font="40"><Link to='/time'>Time de desenvolvimento</Link></LinkStyled>
                    <hr />
                </div>
                <Row>
                    {ListTime.map((item, index) => {
                        return (
                            <Col key={index} className='p-4'>
                                <Card className="align-items-center " style={{ width: '17rem' }}>
                                    <Card.Img style={{ backgroundSize: 'cover', width: '12rem', height: "12rem" }} className="rounded-circle p-3" src={item.Image} />
                                    <Card.Body>
                                        <Card.Title className="text-center">{item.Name}</Card.Title>
                                        <Card.Text className="pb-2 text-right">{item.Cargo}</Card.Text>
                                        <Button variant="outline-primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}