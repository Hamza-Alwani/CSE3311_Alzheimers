/// summary
///
///	Welcome page
///
/// summary

/// To Do
///  -  In the center of the div add a welcome message and a text box for a phone number 
///  - probably make it white or something 
///  -

import React from 'react';

import '../css/Welcome.css'; 

function Welcome() {
  return (
    <div className="Welcome">
      <div className="welcome-message">
        <h1>Welcome!</h1>
        <p>The current website is current under construction please leave your email for Dr. Kathy Lee.</p>
        <input type="text" id="fname" name="firstname" placeholder="Enter Email"/>
      </div>
    </div>
  );
}



export default Welcome;
