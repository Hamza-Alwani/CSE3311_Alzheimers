/// summary
///
///	Navigation bar 
///   - 
/// summary

/// To Do
///

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components'

// css
import '../css/main.css';

// image
import logo from '../pictures/logo1.png';

function NavigationBar() {
  return (
    <NavigationContainer>
      <Navbar collapseOnSelect>
        {/* Logo */}
        <Navbar.Brand> 
          <Link to ="/">
            <img
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top "
                alt="logo"
                />
          </Link> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Main nav bar - leftside */}
          <Nav className="mr-auto">
            <Nav.Link href="/Community_Resources"> Community Resources  </Nav.Link>
            <Nav.Link href="/Dementia_Information">Dementia Information </Nav.Link>
            <Nav.Link href="/Research">            Research             </Nav.Link>
            <Nav.Link href="/Outreach">            Outreach             </Nav.Link>
            <Nav.Link href="/contact_us">          Contact Us           </Nav.Link>
          </Nav> 

          {/* Language drop down */}
          <Nav>
            <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#lang/EN">English</NavDropdown.Item>
              <NavDropdown.Item href="#lang/KO">한국어</NavDropdown.Item>
              <NavDropdown.Item href="#lang/ZH">中文</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-spacer"></div>
    </NavigationContainer>
  );
}

export default NavigationBar;

// 'style-component package used for infile css'
const NavigationContainer = styled.div`


${'' /* space between navbar and the main content between */}
.nav-spacer
{
  padding-bottom: 4rem;
}

.navbar a{
    font-size: 1.5rem;
    padding-right: 10px ;
    word-spacing: 10;
}



`;