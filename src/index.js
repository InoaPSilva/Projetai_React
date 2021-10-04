import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import App from './App';

const colors = {
  bgDark: '#121212',
  bgWhite: '#00000',
  cBlue: '#0000FF',
}

ReactDOM.render(
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);