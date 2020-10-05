/// summary
///
/// Welcome page component used to tell users entering that the site is currently in development.
///
/// summary


import React from 'react';
import styled from 'styled-components'

// component
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 

//image


function Welcome() {
  return (
	<WelcomeContainer>
    <img className="welcome-background" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NJQ4KWEWNUI6RAML5G3TJDGYPU.jpg" alt="background-img"/>

  	<div className="welcome-div">
	  	<div className="main-component">
		    <div className="welcome">
          <a className="find-facilities" href="/Community_Resources"><button className="btn btn-1 btn-1d">Find Facilities Near You</button></a>
		    </div>
		  </div>
	  </div>
	</WelcomeContainer>
  );
}



export default Welcome;


const WelcomeContainer = styled.nav`

/* Background Image */
.welcome-background
{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: auto;
  width: 100%;
}



.welcome
{
  margin: 20%;
  text-align: center
}

.welcome a
{
  color: black;
}

a
{
  width: 100%;
  display: block;  
  justify-content: center;  
  align-items: center;  
  margin:0 auto;
}


/* General Button Style */
.btn {
	border: solid;
	font-family: inherit;
	font-size: 2.5rem;
	color: inherit;
	background: none;
	cursor: pointer;
  /* Makes the red background bigger if you comment this */
	${'' /* padding: 25px 80px; */} 
  ${'' /* margin: 15px 30px; */}
  padding: 0;
	display: inline-block;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 900;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
  width: 80%;
}

.btn:after {
	content: '';
	position: absolute;
	z-index: -1;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}
/* End General */

/* Button Effects */
.btn-1d {
	overflow: hidden;
}

.btn-1d:after {
	width: 0;
	height: 103%;
	top: 50%;
	left: 50%;
	background: var(--primaryTheme);
	opacity: 0;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.btn-1d:hover,
.btn-1d:active {
	color: var(--mainWhite);
}

.btn-1d:hover:after {
	width: 100%;
	opacity: 1;
}

.btn-1d:active:after {
	width: 100%;
	opacity: 1;
}
/* Button Effects End */

@media (max-width: 800px) {
  .welcome-background
  {
    display: none;
  }

  .welcome
  {
    ${'' /* margin: 0; */}
    text-align: center
  }
  
  .btn
  {
    font-size: 1rem;
  }
}

`;