/// summary
///
///	Admin Navigation bar 
///   - Admin navigation bar for admin stuff like create, edit, and delete functions on every link
///
/// summary

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'

import  firebase from '../components/firebase';
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
        {/* Logo */}
        <Navbar.Brand> 
          <Link to ="/admin">
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

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Main nav bar - leftside */}
          <Nav className="mr-auto">
            <Nav.Link href="/Admin_Community_Resources"> Community Resources  </Nav.Link>
            <Nav.Link href="/Admin_Dementia_Information">Dementia Information </Nav.Link>
            <Nav.Link href="/Admin_Research">            Research             </Nav.Link>
            <Nav.Link href="/Admin_Outreach">            Outreach             </Nav.Link>
            <Nav.Link href="/Admin_contact_us">          Contact Us           </Nav.Link>
          </Nav> 

          {/* Language drop down */}
          <Nav>
          <Button varient="danger"  onClick={logout_pressed} type="" className="submit">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-spacer"></div>
    </NavigationContainer>
  );
}

export default NavigationBar;

function logout_pressed(){
   
  firebase.auth().signOut()
  window.location.href="/"
 
}

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