/// summary
///
///	Dementia Component section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - The images won't float left and are centered in the ul li element for some reason

import React from 'react';


// css
import '../css/main.css'; 
import '../css/dementia_information.css'; 

// images
import TenSigns from '../pictures/TenSigns.png';
import Interactive from '../pictures/Interactive.png';
import Caregivers from '../pictures/Caregivers.png';

function DementiaComponent() {
  return (
    <div className="community-div">
      <div className="main-component">

        <h1>Dementia Information</h1>

        <div className="container">

          <ul>
              <li>
                <h3>10 Signs of Alzheimer's</h3>
                <img src={TenSigns}/>
              </li>   
              <li>
                <h3>Interactive Brain Tour</h3>
                <img src={Interactive}/>
              </li>    
              <li>
                <h3>Caregivers</h3>
                <img src={Caregivers}/>
              </li>    
          </ul>


        </div>
      </div>
    </div>
  );
}

export default DementiaComponent;
