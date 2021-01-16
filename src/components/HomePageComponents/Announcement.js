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
/*
	<Carousel>
		{props.map((state) =>{
			return(
			<item>
				<a href={props.website} target="_blank">
						<img src={props.pic} alt="" className="pictures"/>
					</a>
			</item>
			);
})}
</Carousel>
);

*/

					
		

}
export default Announcement;

