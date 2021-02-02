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

