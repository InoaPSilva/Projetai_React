import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import App from './App';

// Palette highlighted and pure
const colors = {
  colorSky: '#CAEBF2',
  colorCarbon: '#A9A9A9',
  colorWatermelon: '#FF3B3F',
  colorNeutral: '#EFEFEF',
}

ReactDOM.render(
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);