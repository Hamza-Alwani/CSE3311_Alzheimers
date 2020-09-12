/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - maybe make a map or use googles maps api for the className="map" section

import React from 'react';

import styled from 'styled-components'

// css
import '../css/main.css'; 

// images
import carrollton from '../pictures/carrollton.jpg';

function CommunityComponent() {
  return (
    <CommunityContainer>
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
    </CommunityContainer>
  );
}

export default CommunityComponent;


const CommunityContainer = styled.nav`
  
.map
{
  float: left;
  width: 60%;
}

.info
{
  float: right;
  width: 40%;
}

`;
