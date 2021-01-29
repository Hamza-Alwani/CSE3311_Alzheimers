import React from 'react';
import styled from 'styled-components'

// bootstrap


// css
import '../../css/main.css'; 
import '../../css/announcement.css'
import Table from 'react-bootstrap/Table'

function Places( {props} ) {
	
	return (
		
		<div>
             <Table striped bordered hover >
                 <thead>
                 <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Website</th>
                <th>Phone number</th>
                </tr>
                 </thead>
             {props.map((state, index) => {
                 // eslint-disable-next-line react/jsx-key
                 return(    // eslint-disable-next-line react/jsx-key
                 <tbody>
                    <tr>
                        <td>{props[index].name}</td>
                        <td>{props[index].address}</td>
                        <td>{props[index].website}</td>
                        <td>{props[index].phone}</td>
                    </tr>
                </tbody>)
             })}
            </Table>
        
        </div>
    );
}

export default Places;

