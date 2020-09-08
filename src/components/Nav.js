/// summary
///
///	Navigation bar 
///
/// summary

/// To Do
/// Complete the a link

import React from 'react';

import '../css/Nav.css'; 

function Nav() {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <ul>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Outreach</a></li>
    		  <li><a href="">Resarch</a></li>
    		  <li><a href="">Dementia Information</a></li>
    		  <li><a href="">Community Reasources</a></li>
    		  <li><a href="">Home</a></li>
    		</ul>
      </header>
    </div>
  );
}

export default Nav;
