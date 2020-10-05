/// summary
///
/// Welcome page component used to tell users entering that the site is currently in development.
///
/// summary


import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// css
import '../css/main.css'; 

// Edits the body css element without making a global css file
const GlobalStyle = createGlobalStyle`
  body{
    background-image:url('https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NJQ4KWEWNUI6RAML5G3TJDGYPU.jpg');
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (max-width: 800px) {
    body{
        background-image: url('');
    }
    
    .btn
    {
      font-size: 1rem;
    }
  }
`

function Welcome() {
  return (
	<WelcomeContainer>
    {/* Inject css into elements outside of this component's scope */}
    <GlobalStyle/> 
    
  	<div className="welcome-div">

	  	<div className="main-component">

		    <div className="welcome">
          <a className="find-facilities" href="/Community_Resources"><button className="btn btn-1 btn-1d">Find Facilities Near You</button></a>
		    </div>

        <div className="welcome-divider">&nbsp;</div>

        <div class="container">
          <section class="home-who-we-are">
            <div class="home-who-we-are-textbox parallax--box">
              <h1>Who we are</h1>
              <p>A research team led by <strong>Dr. Kathy Lee</strong> at the University Of Texas at Arlington.</p>
              <p>Our main goal is to spread awareness of dementia among the Asian Comunnities to improve the quality of our lives </p>
            </div>
          </section>
        </div>


		  </div>
	  </div>

    
	</WelcomeContainer>
  );
}



export default Welcome;


const WelcomeContainer = styled.nav`

.welcome-divider
{
  position: relative;
  margin: 200px;
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


  .btn
  {
    font-size: 1rem;
  }
  .welcome-divider
  {
    position: relative;
    margin: 0px;
  }

}

/* End of Button CSS */



/* Who We Are Section */

.home-who-we-are-textbox {
	background-color: white;
	padding: 4em;
	width: 100vw;
	margin-left: -7%;
	outline: 2px solid #dd3928;
	outline-offset: -2.5em;
	color: black;
	position: relative;
}

.home-who-we-are-textbox h1 {
	color: #dd3928;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: .75em;
	background: white;
	padding: 0 .145em;
  ${'' /* font-size: 1.5rem; */}
}

@media (min-width: 0rem) {
	h1 {
		font-size: 1.5rem;
	}

	.home-who-we-are-textbox {
		${'' /* padding: 5.5em; */}
	}

	.home-who-we-are-textbox h1 {
		top: .6em;
		${'' /* padding: 0 .325em; */}
	}
}

@media (min-width: 40rem) 
{
	h1 {
		font-size: 2.5rem;
	}

	.home-who-we-are {
        
        margin: 0 auto;
        background-repeat: no-repeat;
        padding-top: 7em;
        padding-bottom: 0em;
        position: relative;
        top: 50%;
        left: 17%;
        margin-right: -50%;
	}

	.home-who-we-are-textbox {
		width: 50%;
		padding: 7em;
		outline-offset: -3.75em;
		margin-left: -2.5%;
		top: -5em;
		text-align: left;
		box-shadow: 0 0 4em 0 rgba(0,0,0,.3);
	}

	.home-who-we-are-textbox h1 {
		top: .75em;
		left: 6rem;
		transform: translateX(0);
	}
}


`;