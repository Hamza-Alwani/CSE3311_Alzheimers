/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - maybe make a map or use googles maps api for the className="map" section

import React from 'react';


// css
import '../css/main.css'; 
import '../css/community_resources.css';

// images
import carrollton from '../pictures/carrollton.jpg';

function CommunityComponent() {
  return (
    <div className="community-div">
      <div className="gen_header">
               Community Resources
      </div>
      <div className="main-component">


        <div>

          <div className="map">
            <h3>Map</h3>
            <img src={carrollton} alt="placehold-map" width="80%"/> {/* not working*/}
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

export default CommunityComponent;
