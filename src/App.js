import React from "react";
import FooterComponent from "./component/layout/footer/footer";

// Import Components
import NavbarComponent from "./component/layout/navbar/navbar";
import Routes from "./Routes";

export default function App() {
  return (
    <>
    <NavbarComponent />
    <Routes />
    <FooterComponent />
    </>
  );
}


