import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// css
import '../css/main.css'; 
import '../css/newHomepage1.css'; 

import SomangLogo from '../pictures/somang2.png';
import home1 from '../pictures/home1.png';
import home2 from '../pictures/home2.jpeg';
function newHomepageComponent() {
    return (
<html>
<head>
	<meta charset="utf-8"/>
	<title>newHomepage</title>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
</head>
<body>

	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12 navbar">
				{/* <a href="index.html" class="logo navbar-brand text-white offset-md-2">Logo</a> */}
				<ul class="nav">
					<li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
					<li class="nav-item"><a href="/Community_Resources" class="nav-link">Community Resources</a></li>
					<li class="nav-item"><a href="/Dementia_Information" class="nav-link">Dementia Information</a></li>
					<li class="nav-item"><a href="/Research" class="nav-link">Research</a></li>
					<li class="nav-item"><a href="/Outreach" class="nav-link">Outreach</a></li>
					<li class="nav-item"><a href="/contact_us" class="nav-link">Contact Us</a></li>
					<li class="nav-item"><a href="/About_Us" class="nav-link">About Us</a></li>
				</ul>
			</div>

			{/* slider banner */}

			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			    	<div class="info">
			      		<h1>DEMENTIA COMMUNITY</h1>
						<h1>FOR ASIAN CAREGIVERS</h1>
						<img src={SomangLogo} />
			      		<p>Partnership with Somang Society</p>
			      	</div>
			    </div>
			    <div class="carousel-item">
			    	<div class="info">
			      		<h1>Dementia Community for Asian Caregivers</h1>
			      		<p> Researchers from the University of Texas at Arlington </p>
			      	</div>
			    </div>
			    <div class="carousel-item">
			    	<div class="info">
			      		<h1>Dementia Community for Asian Caregivers</h1>
			      		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			      	</div>
			    </div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

</body>
</html>

);
}
export default newHomepageComponent;