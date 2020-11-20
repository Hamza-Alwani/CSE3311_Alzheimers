/// summary
///
///	Navigation bar 
///   - This component is used to navigate accross the entire website.
///
/// summary

import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

// bootstrap components
import { Navbar, Nav} from 'react-bootstrap';

// css
import '../css/main.css';

// translations
import strings from '../translation/NavigationLang.js'
// maybe you don't need this unless you are on the LanguagePopUp - must check later 
strings.setLanguage(localStorage.getItem("Language"));


function NavigationBar() {
  return (
    // NavigationContainer is a style-component used to give the Nav bar css styles.
    <NavigationContainer>

      {/* 
        Below we used Navbar, a bootstrap component package, 
        that allows us to give a modern look for the website and not reinvent the wheel
      */}
      <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        {/* Logo picture - picture needs to be replaced*/}
        {/* <Navbar.Brand> 
          <Link to ="/">
            <img
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top "
                alt="logo"
                />
          </Link> 
        </Navbar.Brand> */}

        {/* When the resolution is too low, the navigation bar will collapse into a button usually for mobile users. */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        {/* Links below */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Main Navigation Bar - links to pages in use for the user. */}
          <Nav className="ml-auto">
            <Nav.Link href="/home"> {strings.Home} </Nav.Link>
            <Nav.Link href="/Community_Resources"> {strings.Community} </Nav.Link>
            <Nav.Link href="/Dementia_Information">{strings.Dementia} </Nav.Link>
            <Nav.Link href="/Research">            {strings.Research}             </Nav.Link>
            <Nav.Link href="/Outreach">            {strings.Outreach}             </Nav.Link>
            <Nav.Link href="/contact_us">          {strings.ContactUs}          </Nav.Link>
            <Nav.Link href="/about_us">            {strings.AboutUs}         </Nav.Link>
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


/* On screens that are 1000px or less, set the background color to blue */
@media only screen and (max-width: 1000px) {
  .nav-spacer
  {
    padding-bottom: 1rem;
  }
}


/* Theme builder below */
/* https://work.smarchal.com/twbscolor/css/e74c3cc0392becf0f1ffbbbc0 */
/* Use the link above to change the code below */

.navbar {
  background-color: #fffffe;
}
.navbar .navbar-brand {
  color: #dd3928;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #000000;
}
.navbar .navbar-text {
  color: #dd3928;
}
.navbar .navbar-text a {
  color: #000000;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #000000; 
}
.navbar .navbar-nav .nav-link {
  color: #dd3928;
  border-radius: .25rem;
  margin: 0 1rem;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #000000;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #000000;
  background-color: #000000;
}
.navbar .navbar-toggle {
  border-color: #000000;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #000000;
}
.navbar .navbar-toggle .navbar-toggler-icon {
  color: #dd3928;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #dd3928;
}
.navbar .navbar-link {
  color: #dd3928;
}
.navbar .navbar-link:hover {
  color: #000000;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #dd3928;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #fbfbfb;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #fbfbfb;
    background-color: #000000;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #dd3928;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #fbfbfb;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #fbfbfb;
    background-color: #000000;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #dd3928;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #fbfbfb;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #fbfbfb;
    background-color: #000000;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #dd3928;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #fbfbfb;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #fbfbfb;
    background-color: #000000;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #dd3928;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #fbfbfb;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #fbfbfb;
  background-color: #000000;
}

/* End Theme Builder */

/* Override CSS edits above */
.navbar a {
	font-weight: 900;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1rem;
  margin: 1rem;
}

.navbar a {
  -o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
}

.navbar a:hover 
{ 
  color:white;
}

/* End Override */
`;