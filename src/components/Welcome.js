import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 

function Welcome() {
  return (
	<WelcomeContainer>
  	<div className="welcome-div">
	  	<div className="main-component">
		    <div className="welcome">
		        <h1>Welcome!</h1>
		        <p>The website is currently under construction please leave your email for Dr. Kathy Lee :D</p>
		        <input type="email" id="fname" name="firstname" placeholder="Enter Email"/>
		    </div>
		</div>
	</div>
	</WelcomeContainer>
  );
}



export default Welcome;

const WelcomeContainer = styled.nav`

.welcome-div
{
  margin-top: 12%;
}


.welcome
{
  font-size: 30px;
  /* 9/3 - I don't know why but don't use relative positioning */
  /* 9/10 - what a fool i was, the problem was that the parent div didn't have height 
  so absolute took it out of the loop and created its own space */
  /* position: absolute;  */
  text-align: center;
  top: 30%;
  height: 70%;
}

input[type=email], select {
  width: 50%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

`;