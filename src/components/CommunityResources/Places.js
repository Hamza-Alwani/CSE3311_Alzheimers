import React from 'react';
import styled from 'styled-components'

// bootstrap


// css
import '../../css/main.css'; 
import '../../css/announcement.css'
import Table from 'react-bootstrap/Table'



import strings from '../../translation/CommunityLang.js'
strings.setLanguage(localStorage.getItem("Language"));


function Places( {props} ) {
	
	return (
        <PlacesContainer>
		<div>
             <Table striped bordered hover >
                 <thead>
                 <tr>
                <th>{strings.Name}</th>
                <th>{strings.Address}</th>
                <th>{strings.Website}</th>
                <th>{strings.Phone}</th>
                </tr>
                 </thead>
             {props.map((state, index) => {
                 // oldESlint-dis removed
                 return(    // oldESlint-dis removed
                 <tbody>
                    <tr>
                        <td><a href={props[index].map} target="_blank" rel="noopener noreferrer">{props[index].name}</a></td>
                        <td><a href={props[index].map} target="_blank" rel="noopener noreferrer" >{props[index].address}</a></td>
                        <td><a href={props[index].website} target="_blank" rel="noopener noreferrer" >{props[index].website}</a></td>
                        <td>{props[index].phone}</td>
                    </tr>
                </tbody>)
             })}
            </Table>
        
        </div>
        </PlacesContainer>
    );
}
export default Places;


const PlacesContainer = styled.nav`


`