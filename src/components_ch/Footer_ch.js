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
                  <h4> <strong>About Us</strong> </h4>
                  <ul className="list-unstyled">
                    <p>Our main goal is to spread awareness of dementia among the Asian Comunnities to improve the quality of our lives</p>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="col-md-3 col-sm-6">
                </div>
                {/* Column 3 */}
                <div className="col-md-3 col-sm-6">
                </div>
                {/* Column 4 */}
                <div className="col-md-3 col-sm-6">
                  <h4> <strong>Link</strong> </h4>
                  <ul className="list-unstyled">
                    <li><a href="/home_ch">Home</a></li>
                    <li><a href="/Community_Resources_ch">Community Resources</a></li>
                    <li><a href="/Dementia_Information_ch">Dementia Information</a></li>
                    <li><a href="/Research_ch">Research</a></li>
                    <li><a href="/Outreach_ch">Outreach</a></li>
                    <li><a href="/contact_us_ch">Contact Us</a></li>
                    <li><a href="/about_us_ch">About Us</a></li>
                    <li><a href="/">Choose Language</a></li>
                    <li><a href="/admin_home">Admin</a></li>

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

/* On screens that are 600px or less */
@media only screen and (max-width: 600px) {
  .spacer {
  ${'' /* Seperates the body from the footer so it doesn't touch */}
    padding-top: 2rem;
  }
}

`;