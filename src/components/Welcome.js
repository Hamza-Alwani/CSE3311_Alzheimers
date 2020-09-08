/// summary
///
///	Welcome page
///
/// summary

/// To Do
///  - In the center of the div add a welcome message and a text box for a phone number 
///  - probably make it white or something 
///  -

import React from 'react';

import '../css/welcome.css'; 

function Welcome() {
  return (
    <div className="Welcome">
        <h1>Welcome!</h1>
        <p>The website is currently under construction please leave your email for Dr. Kathy Lee :D</p>
        <input type="text" id="fname" name="firstname" placeholder="Enter Email"/>
    </div>
  );
}



export default Welcome;
