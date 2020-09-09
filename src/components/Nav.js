/// summary
///
///	Navigation bar 
///
/// summary

/// To Do
///   - 

import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../css/main.css'; 
import '../css/Nav.css';

// images
import logo from '../pictures/logo1.png';

function Nav() {
  return (
    <div className="nav-div">
      <div className="main-component">
        <header className="Nav-header"> 
          <ul>
            <div>
              <Link to ="/"><img src={logo}  height="100" width="100px" alt="logo" /> </Link>
              <li><Link to ="/contact_us">Contact us</Link></li>    
              <li><Link to ="/Outreach">Outreach</Link></li>
              <li><Link to ="/Research">Research</Link></li>
              <li><Link to ="/Dementia_Information">Dementia Information</Link></li>
              <li><Link to ="/Community_Resources">Community Resources</Link></li>    
            </div>
  		    </ul>
        </header>
      </div>
    </div>
  );
}

export default Nav;
