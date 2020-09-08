/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - 

import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../css/main.css'; 
import '../css/community_resources.css';


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
            <p>map</p>
          </div>

          <div className="info">
            <p>information</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityResources;
