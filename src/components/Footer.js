/// summary
///
///	Footer bar 
///
/// summary

/// To Do
///   - add link and stuff
///   - reorganize 
///   - add more content

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


// css
import '../css/main.css'; 
import '../css/footer.css';


function Footer() {
  return (
      <FooterContainer>
        <div class="spacer"></div>
        <div className="footer-middle">
          <div className="container-change-later">
            <div className="row">
            
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4> Lorem ipsum </h4>
              <ul className="list-unstyled">
                <p>In metus vulputate eu scelerisque felis imperdiet proin.  </p>
              </ul>
            </div>
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4> Lorem ipsum </h4>
              <ul className="list-unstyled">
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
              </ul>
            </div>
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4> Lorem ipsum </h4>
              <ul className="list-unstyled">
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
                <li><a href="/">Lorem, ipsum</a></li>
              </ul>
            </div>
            {/* Column 1 */}
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
      </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`

.spacer {
  ${'' /* i got tired so i hardcoded the s word out of this */}
  ${'' /* seperate the body from the footer so it doesn't touch */}
  ${'' /* put this spacer with the nav bar too */}
    padding-top: 3rem;
}

.container-change-later
{
  margin: 0 auto;
  width:70%;
}
.footer-middle 
{
  
  background: var(--mainBlue);
  padding-top: 3rem; 
  color: var(--mainWhite);
  width: 100%;
}

.footer-bottom
{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

ul li a 
{
  color: var(--mainGrey);
}

ul li a:hover
{
  color: var(--mainLightGrey)
}


`;