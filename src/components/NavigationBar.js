/// summary
///
///	Navigation bar 
///   - This component is used to navigate accross the entire website.
///
/// summary

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

// bootstrap components
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

// css
import '../css/main.css';

// image
import logo from '../pictures/logo1.png';



function NavigationBar() {
  return (
    // NavigationContainer is a style-component used to give the Nav bar css styles.
    <NavigationContainer>

      {/* 
        Below we used Navbar, a bootstrap component package, 
        that allows us to give a modern look for the website and not reinvent the wheel
      */}
      <Navbar collapseOnSelect expand="lg">
        {/* Logo picture */}
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

        {/* When the resolution is too low, the navigation bar will collapse into a button usually for mobile users. */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        {/* Links below */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Main Navigation Bar - links to pages in use for the user. */}
          <Nav className="ml-auto">
            <Nav.Link href="/Community_Resources"> Community Resources  </Nav.Link>
            <Nav.Link href="/Dementia_Information">Dementia Information </Nav.Link>
            <Nav.Link href="/Research">            Research             </Nav.Link>
            <Nav.Link href="/Outreach">            Outreach             </Nav.Link>
            <Nav.Link href="/contact_us">          Contact Us           </Nav.Link>
          </Nav> 

          {/* Language drop down */}
          {/* Move this later */}
          {/* <Nav>
            <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#lang/EN">English</NavDropdown.Item>
              <NavDropdown.Item href="#lang/KO">한국어</NavDropdown.Item>
              <NavDropdown.Item href="#lang/ZH">中文</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-spacer"></div>
    </NavigationContainer>
  );
}

export default NavigationBar;

// 'style-component package used for infile css'
const NavigationContainer = styled.div`


${'' /* Creates a push below the navigation below so nothing is touching */}
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