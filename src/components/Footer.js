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

// css
import '../css/main.css'; 
import '../css/footer.css';


function Footer() {
  return (
      <div className="footer-div">
        <div className="footer-component">
          <footer className="site-footer">

              <div className="container-1">
                <div className="about-us">
                  <h3>About Us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>

              <div className="container-2">
                <div className="link">
                  <h3>Bing Bong</h3>
                  <ul>
                    <div>
                      <li><Link to ="/contact_us">We're</Link></li>    
                      <li><Link to ="/Outreach">Better</Link></li>
                      <li><Link to ="/Research">Than</Link></li>
                      <li><Link to ="/Research">Team</Link></li>
                      <li><Link to ="/Research">2</Link></li>

                    </div>
                  </ul>
                </div>
              </div>

              <div className="container-3">
                <div className="link">
                  <h3>Links</h3>
                  <ul>
                    <div>
                      <li><Link to ="/contact_us">Contact us</Link></li>    
                      <li><Link to ="/Outreach">Outreach</Link></li>
                      <li><Link to ="/Research">Research</Link></li>
                      <li><Link to ="/Dementia_Information">Dementia Information</Link></li>
                      <li><Link to ="/Community_Resources">Community Resources</Link></li>    
                    </div>
                  </ul>
                </div>
              </div>

          </footer>
        </div>
      </div>
  );
}

export default Footer;
