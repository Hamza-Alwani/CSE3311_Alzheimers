import React from 'react';
import styled from 'styled-components'

// bootstrap
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 

import SomangLogo from '../pictures/somang2.png';
import UTALogo from '../pictures/uta2.png';
import background1 from '../pictures/bg.jpg';
import background2 from '../pictures/uta.jpg';
import background3 from '../pictures/home7.jpg';

import Footer from '../components/Footer';

function newHomepageComponent() {
    return (
		<HomePageContainer>
			<Carousel className="carousel-homepage" >
				<Carousel.Item className="carousel-item-1">
					<div className="carousel-title-image">
						<img
							className="mobile-background"
							src={background1}
							alt="First slide"
						/>
						<div className="carousel-info">
							DEMENTIA COMMUNITY<br></br>
							FOR ASIAN CAREGIVERS
						</div>
					</div>
					
					<Carousel.Caption className="carousel-caption-container">
						<a href="https://www.somangsociety.org/">
							<img
							className="carousel-logo"
							src={SomangLogo}
							alt="First slide"
							/>
						</a>
						<p className="carousel-caption">Partnership with Somang Society</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="carousel-item-2">
					<div className="carousel-title-image">
						<img
							className="mobile-background"
							src={background2}
							alt="First slide"
						/>
						<div className="carousel-info">
							DEMENTIA COMMUNITY<br></br>
							FOR ASIAN CAREGIVERS
						</div>
					</div>
					

					<Carousel.Caption className="carousel-caption-container">
						<a href="https://www.uta.edu/">
							<img
							className="carousel-logo"
							src={UTALogo}
							alt="First slide"
							/>
						</a>
						<p className="carousel-caption">Affiliated with the University of Texas at Arlington</p>
						
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<div className="mobile-info-container">
				<div className="mobile-border-line">
					<div className="mobile-title">IT STARTS WITH YOU</div>
					<div className="mobile-button-group">
						<Button variant="primary" size="sm" block>
							FACILITIES
						</Button>
						<Button variant="outline-primary" size="sm" block>
							DEMENTIA INFORMATION
						</Button>
						<Button variant="outline-primary" size="sm" block>
							CONTACT US
						</Button>
					</div>
				</div>	

				<div>
					<img
						className="mobile-info-background"
						src={background3}
						alt="First slide"
					/>
				</div>

				<Footer></Footer>
			</div>
		</HomePageContainer>

);
}
export default newHomepageComponent;

const HomePageContainer = styled.div`


.mobile-background
{
	position: absolute;
	display: none; 
}

.mobile-info-container
{
	display: none;
}

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
	background: url(${background2});
	background-size: 100% 100%;
	background-position: center;
}

.carousel-title-image
{
	height: 100%;
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
	height: 100%;
	font-size: 70px;
	font-weight: 950;
	float: left;
	margin-left: 220px;
	display: flex;
	justify-content: center;
	align-items: center;
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
		/* height: 100vh; For 100% screen height */
    	width:  100vw; /* For 100% screen width */
		text-align: center;
		position:relative;
		padding-top: 10	px;
		border-top: 0.0625rem solid #d7d7d7;
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
		height: 190px;
		position: relative;
		vertical-align: middle;
		font-size: 40px;
		color: white;
		float: none;
		margin-left: 0px;
	}	

	.carousel-logo
	{
		width: 100px;
		height: auto;
	}
	
	.carousel-title-image
	{
		height: 190px;
	}

	.mobile-background
	{
		width: 100%;
		height: 190px;
		display: block; 
	}

	.mobile-info-container
	{
		display: block;
		position: relative;
		margin-top: 30px;
		width: 95%;
    	margin: 0 auto;
		margin-top: 25px;
		margin-bottom: 25px;
		font-weight: 950;
		font-size: 18px;
	}

	.mobile-border-line
	{
		padding-top: 25px;
		padding-bottom: 25px;
		border-bottom: 0.0625rem solid #d7d7d7;
		border-top: 0.0625rem solid #d7d7d7;
	}

	.mobile-title
	{
		text-align: center;
	}

	.mobile-button-group
	{
		margin-top: 20px;
	}

	.carousel-caption-container
	{
		display: none;
		
	}

	.mobile-info-background
	{
		margin-left: -25px;
		width: 110%;
		padding-top: 25px;
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