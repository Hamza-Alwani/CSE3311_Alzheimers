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

// translations
import strings from '../translation/FooterLang.js'
strings.setLanguage(localStorage.getItem("Language"));

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
                  <h4> <strong>{strings.AboutUsTitle}</strong> </h4>
                  <ul className="list-unstyled">
                    <p>{strings.AboutDescription}</p>
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
                  <h4> <strong>{strings.LinkTitle}</strong> </h4>
                  <ul className="list-unstyled">
                    <li><a href="/home">{strings.HomeLink}</a></li>
                    <li><a href="/Community_Resources">{strings.CommunityLink}</a></li>
                    <li><a href="/Dementia_Information">{strings.DementiaLink}</a></li>
                    <li><a href="/Research">{strings.ResearchLink}</a></li>
                    <li><a href="/Outreach">{strings.OutreachLink}</a></li>
                    <li><a href="/contact_us">{strings.ContactUsLink}</a></li>
                    <li><a href="/about_us">{strings.AboutUsLink}</a></li>
                    <li><a href="/">{strings.ChooseLangLink}</a></li>
                    <li><a href="/admin_home">{strings.AdminLink}</a></li>
                  </ul>
                </div>        
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} {strings.AppNameAndAllRightsReserved}
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
  color: var(--black);
  width: 100%;
}

.footer-bottom
{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

ul li a 
{
  color: var(--black);
}


ul li a:hover
{
  color: var(--black)
}

/* On screens that are 600px or less */
@media only screen and (max-width: 600px) {
  .spacer {
  ${'' /* Seperates the body from the footer so it doesn't touch */}
    padding-top: 2rem;
  }
}


`;