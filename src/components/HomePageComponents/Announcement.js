import React from 'react';
import styled from 'styled-components'

// bootstrap
import Carousel from 'react-bootstrap/Carousel'

// css
import '../../css/main.css'; 
import '../../css/announcement.css'
import pic1 from '../../pictures/ann2.png';
import pic2 from '../../pictures/ann1.png';

function Announcement() {
    return (
		
			<Carousel className="carousel-homepage" >
				<Carousel.Item>
					<a href="https://google.com" target="_blank">
						<img src={pic1} alt="" className="pictures"/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
				<a>
				<img src={pic2} alt="" className="pictures"/>
				</a>
				</Carousel.Item>
			</Carousel>
		

);
}
export default Announcement;

