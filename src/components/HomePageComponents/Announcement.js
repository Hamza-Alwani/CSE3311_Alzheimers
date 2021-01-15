import React from 'react';
import styled from 'styled-components'

// bootstrap
import Carousel from 'react-bootstrap/Carousel'

// css
import '../../css/main.css'; 
import '../../css/announcement.css'


function Announcement( {props} ) {
    return (
		<Carousel className="carousel-homepage" >
			<Carousel.Item>
					<a href={props.website} target="_blank">
						<img src={props.pic} alt="" className="pictures"/>
					</a>
			</Carousel.Item>
			</Carousel>

 
);
}
export default Announcement;

