import React from "react";

// Import  Styled Components 
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./styled/Global";

// Import Components
import NavbarComponent from "./component/layout/navbar/Navbar";
import FooterComponent from "./component/layout/footer/Footer";
import Routes from "./Routes";

// Palette highlighted and pure
import theme from "./styled/ThemesStyled";
import { AuthPorvider } from "./context/AuthContext";

export default function App() {


  return (
    <AuthPorvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </ThemeProvider>
    </AuthPorvider>
  );
}


