/// summary
///
///	This should be the homepage 
///
/// summary

import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';

// components

import App from './app'
// React.StrictMode is used for development mode 





ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

