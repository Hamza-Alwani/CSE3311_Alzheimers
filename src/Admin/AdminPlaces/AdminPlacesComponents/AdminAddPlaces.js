/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';

// bootstrap
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

//css
import '../../../css/admin.css'



function AdminAddOutreach() {
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>


               <Form className="admin-form">
                  <Form.Group>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="name" id="Name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Address</Form.Label>
                     <Form.Control type="name" id="Address" placeholder="123 street Arlington TX" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Website</Form.Label>
                     <Form.Control type="name" id="Website" placeholder="www.example.com" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Phone number</Form.Label>
                     <Form.Control type="name" id="phone_number" placeholder="(123) 333-333" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Map link</Form.Label>
                     <Form.Control type="name" id="map_link" placeholder="https://www.google.com/maps/place/yadadad" />
                  </Form.Group>
                  <Button onClick={() => add_places_button()}variant="primary" type="submit" className="submit">Add</Button>
               </Form>
         


         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddOutreach;



// Once all the text are filled out then this function is called to submit the information to firebase.
function add_places_button(){ 

   var key;
   window.alert(document.getElementById("Name").value)
   window.alert(document.getElementById("Address").value)
   window.alert(document.getElementById("Website").value)
   window.alert(document.getElementById("phone_number").value)
   window.alert(document.getElementById("map_link").value)

   if(document.getElementById("Name").value)
   {
      
         key = firebase.database().ref('Places').push().key;
         firebase.database().ref('Places/'+key).set({
               name:document.getElementById("Name").value,
               address:document.getElementById("Address").value,
               website:document.getElementById("Website").value,
               phone:document.getElementById("phone_number").value,
               map:document.getElementById("map_link").value,
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
      window.alert("Failed, make sure all fields are full");
   }
}


// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 
 
`