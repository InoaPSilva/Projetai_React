import React from "react";

// Import  Styled Components 
import { ThemeProvider } from 'styled-components';

// Import Components
import NavbarComponent from "./component/layout/navbar/Navbar";
import FooterComponent from "./component/layout/footer/Footer";

// Palette highlighted and pure
import theme from "./styled/ThemesStyled";
import { AuthPorvider } from "./context/AuthContext";
import Routes from "./Routes/index";

export default function App() {


  return (
    <AuthPorvider>
      <ThemeProvider theme={theme}>
        <NavbarComponent />
        <Routes />
        <FooterComponent  />
      </ThemeProvider>
    </AuthPorvider>
  );
}


