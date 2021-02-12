import React from 'react';
import styled from 'styled-components'

// bootstrap


// css
import '../../css/main.css'; 
import '../../css/announcement.css'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useState } from 'react';


import strings from '../../translation/CommunityLang.js'
strings.setLanguage(localStorage.getItem("Language"));


function Places( {props} ) {
	const [show, setShow] = useState(false);
    const [location, setLocation]= useState(null)
    const [name, setName]= useState(null)

	return (
        <PlacesContainer >
		<div>

        <Modal
        show={show}
        size="lg"
        centered
        onHide={() => setShow(false)}
        // dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
        > 
          <ModalContainer>
            <div dangerouslySetInnerHTML={{ __html: location}}></div> 
          </ModalContainer>
        </Modal.Body>
      </Modal>


             <Table striped bordered hover >
                 <thead>
                 <tr>
                <th>{strings.Name}</th>
                <th>{strings.Address}</th>
                <th>{strings.Website}</th>
                <th>{strings.Phone}</th>
                </tr>
                 </thead>
                 <tbody>
             {props.map((state, index) => {
                 // oldESlint-dis removed
                 return(    // oldESlint-dis removed
                        <tr>
                        <td onClick={() => body_clicked(props[index].map)} >{props[index].name}</td>
                        <td onClick={() => body_clicked(props[index].map)} >{props[index].address}</td>
                        <td onClick={() => body_clicked(props[index].website)} >{props[index].website}</td>
                        <td>{props[index].phone}</td>
                        </tr> 
                   
                )
             })}
              </tbody>
            </Table>
        
        </div>
        </PlacesContainer>
    );
}
export default Places;

function body_clicked( props )
{
  window.open(
   props,
    '_blank' // <- This is what makes it open in a new window.
  );
}

const PlacesContainer = styled.nav`
a
{
    color: black;
}
a:hover{
    color: blue
}

`

const ModalContainer = styled.div`

.video-modal-body
{
  height: 500px;
}

@media only screen and (max-width: 1000px) {
  .video-modal-body
  {
    height: 200px;
  }
}

`
