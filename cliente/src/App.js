import React from 'react';

// Importando Pages 
import Navbar from './components/layout/navbar';
import FooterComponent from './components/layout/footer';

// Importando Rotas
import Routes from './routes.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <FooterComponent />
    </>
  );
}

export default App;
