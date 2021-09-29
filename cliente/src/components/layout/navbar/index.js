import React from "react";

// Importando estilização
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

// Importação Do menu
import { NavList } from "./navBarList";
import { isAuthenticated } from "../../../auth";
import { BsPersonFill } from "react-icons/bs";

// NavbarComponet
export default function NavbarComponet() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">Projetai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {NavList.map((item, index) => {
                                return (
                                    <Nav.Link
                                        key={index}
                                        className={item.cName}
                                        href={item.url}>{item.title}</Nav.Link>
                                )
                            })}
                        </Nav>
                        <Nav>
                            {console.log(isAuthenticated())}
                            {isAuthenticated() === true ? (
                                <BsPersonFill />
                            ) : (
                                <NavDropdown title="Mais" className="text-Secondary">

                                    <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}