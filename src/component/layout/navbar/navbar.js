import React from "react";
import { IsAuthenticated } from '../../../Auth';

// Import components from react-bootstrap
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { StyledNavbar } from './styledNavbar'

// Importação Do menu
import { NavList } from "./navList";

export default function NavbarComponent() {
    return (
        <StyledNavbar collapseOnSelect expand="lg">
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
                        {console.log(IsAuthenticated())}
                        <NavDropdown title="Mais" className="text-Secondary">
                            <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}