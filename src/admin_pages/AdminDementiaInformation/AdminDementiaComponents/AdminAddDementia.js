/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../components/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/admin.css'


function AdminAddDementia() {

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>

            {/* Drop down to pick citys */}
            <Form onSubmit={add_button_pressed} className="admin-form">
               {/* Form for Name */}
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" id="title" placeholder="Name" />
               </Form.Group>

               {/* Form for Description */}
               <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="name" id="description" placeholder="Text" />
               </Form.Group>

               {/* Form for Picture URL */}
               <Form.Group>
                  <Form.Label>Picture URL</Form.Label>
                  <Form.Control type="name" id="pic" placeholder="URL.jpg" />
               </Form.Group>

               {/* Form for Website URL */}
               <Form.Group>
                  <Form.Label>Website URL</Form.Label>
                  <Form.Control type="name" id="website" placeholder="URL" />
               </Form.Group>
               
               {/* Button to submit the form - additional information: used with the add_button_pressed function defined in this file. */}
               <Button onClick={() => add_button_pressed}variant="primary" type="submit" className="submit">Add</Button>
            </Form>
         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddDementia;

// Customize style of dropdowns
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


// Once all the text are filled out then this function is called to submit the information to firebase.
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
 