import React from "react";
import { Link } from "react-router-dom";

// StyledComponent and React Booststrap 
import { Container, Col, Row, Image, Button, Card } from "react-bootstrap";
import { SectionAlunos, SectionEmpresas, MainSectionStyled } from '../../../styled/pages/IndexStyled.js'
import LinkStyled from "../../../styled/layout/LinkStyled.js";
import TitleStyled from "../../../styled/layout/TitleStyled.js";

// Lists 
import { ListTime } from "./listTime";
import { ListCompanies } from "./listEmpresas";
import { ListAlunos } from "./listAlunos";

// imagens
import LogoSenac from '../../../assets/logo/empresas/logoSenac.svg'
import Pitch from '../../../assets/background/pitch.jpg';


export default function IndexPage() {
    return (
        <>
            <MainSectionStyled img={Pitch}>
                <Container className="text-center" >
                    <Image src={LogoSenac} height="100px" className="ml-auto" />
                    <p className="pt-2">Faculdade Senac Pernambuco</p>
                </Container>
                <Container>
                    <Row>
                        <Col xs={5} >
                            <TitleStyled >O que é o projetai</TitleStyled>
                            <hr />
                            <p>O ProjetAí é uma iniciativa da Faculdade SENAC - Pernambuco para apresentar os projetos integradores/unidade de extensão dos cursos de Análise e Desenvolvimento de Sistemas (ADS).</p>
                        </Col>
                        <Col xs={1} />
                        <Col xs={6}>
                            <Image src={LogoSenac} className="p-5" fluid />
                        </Col>
                    </Row>
                </Container>
            </MainSectionStyled>

            {/* Alunos */}
            <SectionAlunos className="pt-2">
                <Container>
                    <div>
                        <TitleStyled className="mt-5">No que afeta os alunos?</TitleStyled>
                        <hr />
                    </div>
                    <Row>
                        {ListAlunos.map((array, index) => {
                            return (
                                <Col key={index} className="p-5 m-4 shadow p-3 mb-5 bg-white rounded">
                                    <Image className="rounded p-4" src={array.img} fluid />
                                    <h5 className="h5">{array.title}</h5>
                                    <p>{array.description}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </SectionAlunos>

            {/* Empresas */}
            <SectionEmpresas>
                <div>
                    <div>
                        <h3 className="h3 mt-5">As Empresas Conosco</h3>
                        <hr />
                    </div>
                    <Row className="p-0 m-0">
                        {ListCompanies.map((item, index) => {
                            return (
                                <Col key={index} xs={6} md={4}>
                                    <Link to={item.link} className="align-items-center ">
                                        <Image
                                            style={{ height: "14rem", width: "15rem", }}
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
            </SectionEmpresas>

            {/* Time de desenvolvimento */}
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