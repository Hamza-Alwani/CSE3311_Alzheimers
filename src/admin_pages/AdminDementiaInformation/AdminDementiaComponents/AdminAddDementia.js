/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/admin.css'


function AdminAddCommunity() {

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Texas');

   // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
   const DropdownStates = ({ nameList }) => {
     return (
       <Dropdown>
         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
         <Dropdown.Menu className="dropdown-menu">
           {nameList.map((state, index) => (
             <Dropdown.Item  onClick={() => {setSelectedState(state)}} key={index}>{state}</Dropdown.Item>
           ))}
         </Dropdown.Menu>
       </Dropdown>
     );
   };
   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>

            {/* Drop down to pick citys */}
            <Form onSubmit={add_button_pressed} className="admin-form">
                  <Form.Group>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="name" id="title" placeholder="name" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Description</Form.Label>
                     <Form.Control type="name" id="description" placeholder="address" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Picture URL</Form.Label>
                     <Form.Control type="name" id="pic" placeholder="address" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Website URL</Form.Label>
                     <Form.Control type="name" id="website" placeholder="address" />
                  </Form.Group>
                  
                  <Button onClick={() => add_button_pressed}variant="primary" type="submit" className="submit">Add</Button>
               </Form>
         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddCommunity;


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
      <div id="state">{children}</div>
   </a>
   ));
CustomToggle.propTypes = 
{
   // fixing prop type erros but idk how too yet 
   // children: Array,
   // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";



function add_button_pressed(){ 

    if( document.getElementById("title").value && 
        document.getElementById("description").value &&
        document.getElementById("pic").value &&
        document.getElementById("website").value)
    {
        var key=firebase.database().ref('Article').push().key;
        firebase.database().ref('Article/'+key).set({
            title:document.getElementById("title").value,
            disc:document.getElementById("description").value,
            pic:document.getElementById("pic").value,
            website:document.getElementById("website").value,
        },function(error){
            if(error){
            window.alert("failed");
            }else{
            window.alert("yes");
            window.location.reload(false);
            }
        });
    }
    else
    {
        window.alert("failed. Make sure all fields are full");
    }

}



// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 