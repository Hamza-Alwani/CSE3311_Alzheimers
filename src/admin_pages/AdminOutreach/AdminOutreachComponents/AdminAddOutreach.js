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

function AdminAddOutreach() {
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>


               <Form onSubmit={add_outreach_button} className="admin-form">
                  <Form.Group>
                     <Form.Label>Title</Form.Label>
                     <Form.Control type="name" id="outreachTitle" placeholder="Title" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Description</Form.Label>
                     <Form.Control type="name" id="outreachDescription" placeholder="Description" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Picture URL</Form.Label>
                     <Form.Control type="name" id="outreachPicture" placeholder="www.example.com/picture.jpg" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Website URL</Form.Label>
                     <Form.Control type="name" id="outreachWebsite" placeholder="www.example.com" />
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
               
                  <Button onClick={() => add_outreach_button}variant="primary" type="submit" className="submit">Add</Button>
               </Form>
         


         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddOutreach;

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
function add_outreach_button(){ 

   var key;

   if(document.getElementById("outreachTitle").value && 
   document.getElementById("outreachDescription").value &&
   document.getElementById("outreachPicture").value &&
   document.getElementById("outreachWebsite").value)
   {
      if(e) 
      {
         key = firebase.database().ref('Outreach').push().key;
         firebase.database().ref('Outreach/'+key).set({
               type: "outreach",
               title:document.getElementById("outreachTitle").value,
               disc:document.getElementById("outreachDescription").value,
               pic:document.getElementById("outreachPicture").value,
               website:document.getElementById("outreachWebsite").value,
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
         key = firebase.database().ref('Outreach').push().key;
         firebase.database().ref('Outreach/'+key).set({
            type: "outreach",
            title:document.getElementById("outreachTitle").value,
            disc:document.getElementById("outreachDescription").value,
            pic:document.getElementById("outreachPicture").value,
            website:document.getElementById("outreachWebsite").value,
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
         key = firebase.database().ref('Outreach').push().key;
         firebase.database().ref('Outreach/'+key).set({
            type: "outreach",
            title:document.getElementById("outreachTitle").value,
            disc:document.getElementById("outreachDescription").value,
            pic:document.getElementById("outreachPicture").value,
            website:document.getElementById("outreachWebsite").value,
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
         window.alert("Failed, select a language");
      }
   }
   else
   {
      window.alert("Failed, make sure all fields are full");
   }
}


// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 
 
`