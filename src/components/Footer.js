/// summary
///
///	Footer bar 
/// - Besides being the footer of the website key things this component does is
///           - Creates a push against the content above it 
///
/// summary

import React from 'react';
// import { Link } from 'react-router-dom'; // not used
import styled from 'styled-components'


// css
import '../css/main.css'; 


function Footer() {
  return (
      <FooterContainer>
        <div className="fullbody"> 
          <div className="spacer">
          </div>
          <div className="footer-middle">
            <div className="footer-content">
              <div className="row">
                {/* Column 1 */}
                <div className="col-md-3 col-sm-6">
                  <h4> About Us </h4>
                  <ul className="list-unstyled">
                    <p>In metus vulputate eu scelerisque felis imperdiet proin.  </p>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="col-md-3 col-sm-6">
                  <h4> Lorem ipsum </h4>
                  <ul className="list-unstyled">
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="col-md-3 col-sm-6">
                  <h4> Lorem ipsum </h4>
                  <ul className="list-unstyled">
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div className="col-md-3 col-sm-6">
                  <h4> Lorem ipsum </h4>
                  <ul className="list-unstyled">
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                    <li><a href="/">Lorem, ipsum</a></li>
                  </ul>
                </div>        
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Alzhiemer's App - All Rights Reserve
                </p>
              </div>
            </div> 
          </div>
        </div>
      </FooterContainer>
  );
}

export default Footer;

// 'style-component package used for infile css'
const FooterContainer = styled.footer`

.spacer {
  ${'' /* Seperates the body from the footer so it doesn't touch */}
  padding-top: 8rem;
}

.footer-content
{
  margin: 0 auto;
  width:70%;
}
.footer-middle 
{
  background: var(--mainWhite);
  padding-top: 3rem; 
  color: var(--primaryTheme);
  width: 100%;
}

.footer-bottom
{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

ul li a 
{
  color: var(--primaryTheme);
}


ul li a:hover
{
  color: var(--primaryTheme)
}


`;