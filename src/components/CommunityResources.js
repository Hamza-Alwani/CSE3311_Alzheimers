/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - make a map or use googles maps api for the className="map" section

import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../css/main.css'; 
import '../css/community_resources.css';

// images
import carrollton from '../pictures/carrollton.jpg';

function CommunityResources() {
  return (
    <div className="community-div">
      <div className="main-component">

        <h1>Community Resources</h1>
        {
        //<button type="button">fuck team 2</button>
        }

        {
          // later will add a map to the left and infomation to the right
        }

        <div>

          <div className="map">
            <h3>Map</h3>
            <img src={carrollton} width="80%"/> {/* not working*/}
          </div>

          <div className="info">

            <div className="info-top">
              <h3>Carrolton Health & Rehabilitation Center</h3>
            </div>
            
            <div className="info-bottom">
              <p>Phone Number: 972-245-1573</p>
              <p>Address: 1618 Kirby Rd</p> {/* maybe make this a link to google maps in the future? */}
              <p>Website: https://carrolltonhealth.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityResources;
