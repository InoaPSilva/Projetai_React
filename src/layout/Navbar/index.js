import React, { useContext } from "react";

// Import components from react-bootstrap
import { Nav, Navbar, NavDropdown, Container, Image } from "react-bootstrap";
import { StyledHeader, NavbarStyled, NavBrandStlyled } from "./styles";
import LinkStyled from "../../styled/layout/LinkStyled";
import { ThemeContext } from "styled-components";
import { shade } from 'polished';

// Import the menu
import { NavList } from "./navList";
import LogoProjetai from "../../assets/logo/projetai/LogoProjetaiName.svg"

function NavbarComponent() {
    
    const { colors } = useContext(ThemeContext);

    return (
        <StyledHeader color={'#ffffff'}>
            <NavbarStyled collapseOnSelect expand="lg">
                <Container>
                    <NavBrandStlyled href="/"><Image fluid src={LogoProjetai} width="100px" alt="Logo projetai"/></NavBrandStlyled>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {NavList.map((item, index) => {
                                return (
                                    <LinkStyled 
                                        key={index}
                                        className={item.cName}
                                        href={item.url}
                                        color={colors.cOrange}
                                        colorLink={shade(0.30, colors.cOrange)}
                                        colorDecoration={colors.cBlue}
                                        >{item.title}</LinkStyled>
                                )
                            })}
                        </Nav>
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
export default NavbarComponent;
