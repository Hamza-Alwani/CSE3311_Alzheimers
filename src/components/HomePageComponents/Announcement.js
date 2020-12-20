import React from 'react';
import styled from 'styled-components'

// bootstrap
import Carousel from 'react-bootstrap/Carousel'

// css
import '../../css/main.css'; 
import '../../css/announcement.css'


import ann1 from '../../pictures/ann1.png';
import ann2 from '../../pictures/ann2.png';

function Announcement() {
    return (
		
			<Carousel className="carousel-homepage" >
				<Carousel.Item className="carousel-item-1">
				</Carousel.Item>
				<Carousel.Item className="carousel-item-2">
				</Carousel.Item>
			</Carousel>
		

);
}
export default Announcement;

