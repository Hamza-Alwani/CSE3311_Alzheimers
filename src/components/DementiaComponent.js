/// summary
///
///	Dementia Component section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - 

import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 

// images
import TenSigns from '../pictures/TenSigns.png';
import Interactive from '../pictures/Interactive.png';
import Caregivers from '../pictures/Caregivers.png';

function DementiaComponent() {
  return (
    <DementiaContainer>
      <div className="community-div">
        <div className="main-component">

          <h1>Dementia Information</h1>

          <div className="container">

            <ul>
                <li>
                  <h3>10 Signs of Alzheimer's</h3>
                  <img src={TenSigns} alt="placeholder"/>
                </li>   

                <li>
                  <h3>Interactive Brain Tour</h3>
                  <img src={Interactive} alt="placeholder"/>
                </li>    
                
                <li>
                  <h3>Caregivers</h3>
                  <img src={Caregivers} alt="placeholder"/>
                </li>    
            </ul>


          </div>
        </div>
      </div>
    </DementiaContainer>
  );
}

export default DementiaComponent;

const DementiaContainer = styled.nav`
  .container
  {
    overflow: hidden;
    position: relative;
    width: 100%;
    
  }

  .container ul 
  {	
    /*top: 100%;*/
    width: 100%;
  }

  .container ul li
  {
    float: left;
    width: 30%;
    list-style: none;
  }

  .container ul li img
  {
    float: left;
    width: 100%;
    list-style: none;
    margin: 0px;
  }

  .article{
    
    text-align: center;
  }
`;