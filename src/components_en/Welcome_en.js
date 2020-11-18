/// summary
///
/// Welcome page used to tell users who we are and what we do.
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
	background-image:url('https://s3.amazonaws.com/zweb-s3.uploads/ez2/wp-content/uploads/2014/01/cognitive-training-holistic-mnemonic-training-gettyimages1.jpg'); 
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

			<div className="welcome-button">
				<a className="find-facilities-button" href="/Community_Resources_en"><button className="btn btn-1 btn-1d">Find Facilities Near You</button></a>
			</div>
			
			{/* seperates divs with space */}
			<div className="welcome-divider">&nbsp;</div>
			{/* seperates divs with space */}

			<section className="home-who-we-are">
				<div className="home-who-we-are-textbox parallax--box">
					<h1>Who we are</h1>
					<p>A research team led by <strong>Dr. Kathy Lee</strong> at the University Of Texas at Arlington.</p>
					<p>Our main goal is to spread awareness of dementia among the Asian Comunnities to improve the quality of lives </p>
				</div>
			</section>

			{/* seperates divs with space */}
			<div className="welcome-divider">&nbsp;</div>
			{/* seperates divs with space */}

		</div>
	</div>

    
	</WelcomeContainer>
  );
}



export default Welcome;


const WelcomeContainer = styled.nav`

/* Initial CSS when loading up the site */
.welcome-divider
{
  position: relative;
  margin: 200px;
}

.welcome-button
{
  margin: 20%;
  margin-top: 35%;
  text-align: center
}

.welcome-button a
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
/* Finish Initial CSS */




/* General Button Style */
.btn {
	border: solid;
	font-family: inherit;
	font-size: 2.5rem;
	color: var(--primaryTheme);
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
/* End General Button */

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




/* Who We Are Section */

.home-who-we-are-textbox {
	background-color: white;
	padding: 4em;
	width: 100vw;
	margin-left: -2.5%;
	outline: 2px solid var(--primaryTheme);
	outline-offset: -2.5em;
	color: black;
	position: relative;
}

.home-who-we-are-textbox h1 {
	color: var(--primaryTheme);
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: .75em;
	background: white;
	padding: 0 .145em;
  ${'' /* font-size: 1.5rem; */}
}

/* End of Who We Are Section */


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

@media (min-width: 0px) {
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

@media (min-width: 640px) 
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