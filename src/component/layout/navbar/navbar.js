import React from "react";

// Import components from react-bootstrap
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { IsAuthenticated } from "../../../Auth";
import { StyledHeader, NavbarStyled, NavBrandStlyled } from "../../../styled/components/HeaderStyled";
import LinkStyled from "../../../styled/layout/LinkStyled";

// Import  the menu
import { NavList } from "./navList";

export default function NavbarComponent() {
    return (
        <StyledHeader>
            <NavbarStyled collapseOnSelect expand="lg">
                <Container>
                    <NavBrandStlyled href="/">Projetai</NavBrandStlyled>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {NavList.map((item, index) => {
                                return (
                                    <LinkStyled 
                                        key={index}
                                        className={item.cName}
                                        href={item.url}>{item.title}</LinkStyled>
                                )
                            })}
                        </Nav>
                        {IsAuthenticated()}
                        <Nav>

                            {/* Mudar para um icone usando React icons :D */}
                            <NavDropdown title="Mais" className="">
                                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarStyled>
        </StyledHeader>
    )
}