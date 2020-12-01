import React from 'react';
import styled from 'styled-components'

// bootstrap
import Carousel from 'react-bootstrap/Carousel'

// css
import '../css/main.css'; 

import SomangLogo from '../pictures/somang2.png';
import UTALogo from '../pictures/uta.png';
import background1 from '../pictures/home6.jpg';

function newHomepageComponent() {
    return (
		<HomePageContainer>
			<Carousel className="carousel-homepage" >
				<Carousel.Item className="carousel-item-1">
					<div className="carousel-info">
						<p>DEMENTIA COMMUNITY</p>
						<p>FOR ASIAN CAREGIVERS</p>
					</div>
					
					<Carousel.Caption>
						{/* <h3>First slide label</h3> */}
						<img
						className="carousel-logo"
						src={SomangLogo}
						alt="First slide"
						/>
						<p className="carousel-caption">Partnership with Somang Society</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="carousel-item-2">
					<div className="carousel-info">
						
						
					</div>

					<Carousel.Caption>
						{/* <h3>Second slide label</h3> */}
						<img
						className="carousel-logo"
						src={UTALogo}
						alt="First slide"
						/>
						<p className="carousel-caption">Partnership with University of Texas at Arlington</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</HomePageContainer>

);
}
export default newHomepageComponent;

const HomePageContainer = styled.div`

.carousel-homepage
{
	width: 100%;
	height: 100%;
	text-align: center;
	background: white;
	position: absolute;
	top: 0;
	
}

.carousel-item-1
{
	background: url(${background1});
	background-size: 100% 100%;
	background-position: center;
}

.carousel-item-2
{
	background: url('https://cdn.web.uta.edu/-/media/project/website/homepage/university-center-horses-wide-view.ashx?revision=1298802d-9c6c-4877-9ea9-005fef81ea6a');
	background-size: 100% 100%;
	background-position: center;
}

.carousel-inner
{
	display: flex;
	height: 100%;
}

.carousel-info
{
	position: relative;
	vertical-align: middle;
	top: 40%;
	font-size: 50px;
}	

.carousel-logo
{
	width: 10%;
	height: auto;

}

.carousel-caption
{
	color: black;
}

/* When height is 1000px or less */
@media (max-width: 1000px) 
{
	.carousel-homepage
	{
		height: 100vh; /* For 100% screen height */
    	width:  100vw; /* For 100% screen width */
		text-align: center;
		background: white;
		position:relative;
	}

	.carousel-item-1
	{
		background: none;
	}

	.carousel-item-2
	{
		background: none;
	}
	.carousel-caption
	{
		color: black;
	}
	
	.carousel-info
	{
		position: relative;
		vertical-align: middle;
		top: 40%;
		font-size: 40px;
	}	

	.carousel-logo
	{
		width: 100%;
		height: auto;
	}
}

/* When height is 650px or less */
@media (max-width: 650px) 
{
	.carousel-info
	{

		font-size: 20px;
	}	
}


`