import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorkerRegistration.register();