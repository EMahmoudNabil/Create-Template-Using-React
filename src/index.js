import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import  './Components/App.css';
import {BrowserRouter   } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
    
  ,
  document.getElementById('root')
);


