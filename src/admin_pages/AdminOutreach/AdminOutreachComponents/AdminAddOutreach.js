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

var e=false;
var c=false;
var k=false;

function change_e()
{
   e=!e
}
function change_c()
{
   c=!c
}
function change_k()
{
   k=!k
}

function AdminAddDementia() {
   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>

            {/* Drop down to pick citys */}
            <Form onSubmit={add_button_pressed} className="admin-form">
                   <Form.Group>
                     <Form.Label>Title</Form.Label>
                     <Form.Control type="name" id="title" placeholder="Title" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Youtube link</Form.Label>
                     <Form.Control type="name" id="url" placeholder="web url" />
                  </Form.Group>
                 
                  <Form.Group>
                     <Form.Label>Language</Form.Label>
                     <Form.Check
                        type="switch"
                        label="English"
                        name="formHorizontalRadios"
                        id="en"
                        onChange={change_e}
                     />
                     <Form.Check
                        type="switch"
                        label="Chinese"
                        name="formHorizontalRadios"
                        id="ch"
                        onChange={change_c}
                     />
                     <Form.Check
                        type="switch"
                        label="Korean"
                        name="formHorizontalRadios"
                        id="ko"
                        onChange={change_k}
                     />
                  </Form.Group>
                  
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

   


   if(document.getElementById("url").value && document.getElementById("title"))
   {
      if(e) 
      {
         var key=firebase.database().ref('Outreach').push().key;
         firebase.database().ref('Outreach/'+key).set({
             title:document.getElementById("title").value,
             url:document.getElementById("url").value,
             language:"en",
         },function(error){
             if(error){
             window.alert("failed");
             }else{
             window.alert("yes");
             window.location.reload(false);
             }
         });
     }
      if(c)
      {
        var key=firebase.database().ref('Outreach').push().key;
        firebase.database().ref('Outreach/'+key).set({
            title:document.getElementById("title").value,
            url:document.getElementById("url").value,
            language:"ch",
        },function(error){
            if(error){
            window.alert("failed");
            }else{
            window.alert("yes");
            window.location.reload(false);
            }
        });
      }
      if(k)
      {
        var key=firebase.database().ref('Outreach').push().key;
        firebase.database().ref('Outreach/'+key).set({
            title:document.getElementById("title").value,
            url:document.getElementById("url").value,
            language:"ko",
       },function(error){
        if(error){
        window.alert("failed");
        }else{
        window.alert("yes");
        window.location.reload(false);
        }
    });
   }
   if( !c && !k && !e)
   {
      window.alert("failed. Make sure all fields are full");
   }
   
}
else
{
    window.alert("failed. Make sure all fields are full");
}
}



// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 
 
 `;