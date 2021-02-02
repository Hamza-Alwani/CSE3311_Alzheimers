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
			{props.map((state, index) => {
				// eslint-disable-next-line react/jsx-key
				return <Carousel.Item > 
					<a href={props[index].website} target="_blank"  rel="noopener noreferrer" >
						<img src={props[index].pic} alt="" className="pictures"/>
					</a>
				</Carousel.Item> 
			})}
		</Carousel>
	);
}
export default Announcement;

