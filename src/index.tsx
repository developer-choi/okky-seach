import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {GlobalStyle} from './utils/reset';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Route>
        <App/>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
