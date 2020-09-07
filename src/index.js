/// summary
///
///	This should be the homepage 
///
/// summary

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// components
import Nav from './components/Nav';
import Welcome from './components/Welcome';

// React.StrictMode is used for development mode 

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Welcome/>
  </React.StrictMode>,
  document.getElementById('root')
);

