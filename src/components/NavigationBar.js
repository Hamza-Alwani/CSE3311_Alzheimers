/// summary
///
///	Navigation bar 
///
/// summary

/// To Do
/// Complete the a link
import '../css/Nav.css'; 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';



function NavigationBar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
  <Navbar.Brand> <Link to ="/">
  <img
        src={logo}
        width="80"
        height="80"
        className="d-inline-block align-top "
        alt="logo"
        />
    </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Community_Resources"> Community Resources  </Nav.Link>
      <Nav.Link href="/Dementia_Information">Dementia Information </Nav.Link>
      <Nav.Link href="/Research">            Research             </Nav.Link>
      <Nav.Link href="/Outreach">            Outreach             </Nav.Link>
      <Nav.Link href="/contact_us">          Contact Us           </Nav.Link>
    </Nav> 
    <Nav>
         <NavDropdown title="Language" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#lang/EN">English</NavDropdown.Item>
        <NavDropdown.Item href="#lang/KO">Korean</NavDropdown.Item>
    
        <NavDropdown.Item href="#lang/ZH">Chinese</NavDropdown.Item>

      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
