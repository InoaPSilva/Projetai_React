import React from "react";

import { ThemeProvider } from 'styled-components';
import FooterComponent from "./component/layout/footer/Footer";
import { GlobalStyles } from "./styled/layout/Global";
// Import Components
import NavbarComponent from "./component/layout/navbar/Navbar";
import Routes from "./Routes";
import { ColorBackground } from "./styledApp";

// Palette highlighted and pure
const theme = {
  colors: {
    cSky: '#CAEBF2',
    cCarbon: '#A9A9A9',
    cWatermelon: '#FF3B3F',
    cNeutral: '#EFEFEF',
    cWhite: '#FFFFFF'
  }
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavbarComponent />
        <ColorBackground>
          <Routes />
        </ColorBackground>
        <FooterComponent />
      </ThemeProvider>,
    </>
  );
}


