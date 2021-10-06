import React from "react";

// Import  Styled Components 
import { ThemeProvider } from 'styled-components';
import { ColorBackground } from "./styledApp";
import { GlobalStyles } from "./styled/layout/Global";

// Import Components
import NavbarComponent from "./component/layout/navbar/Navbar";
import FooterComponent from "./component/layout/footer/Footer";
import Routes from "./Routes";

// Palette highlighted and pure
import theme from "./styled/ThemesStyled";

export default function App() {
  return (
    <>
    {/* Cria temas para poder utilizar  */}
      <ThemeProvider theme={theme}>
        {/* Aplica o estilo global */}
        <GlobalStyles />
        <NavbarComponent />
        <ColorBackground>
        {/* Listagem de rotas + rotas privadas */}
          <Routes />
        </ColorBackground>
        <FooterComponent />
      </ThemeProvider>,
    </>
  );
}


