/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';

// bootstrap
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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

            {/* Article Tab*/}
            <Tabs defaultActiveKey="article" id="uncontrolled-tab-example">
               <Tab eventKey="article" title="Article">
                  <Form onSubmit={add_article_button} className="admin-form">
                     <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="name" id="articleTitle" placeholder="Title" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="name" id="articleDescription" placeholder="Description" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="name" id="articlePicture" placeholder="www.example.com/picture.jpg" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control type="name" id="articleWebsite" placeholder="www.example.com" />
                     </Form.Group>
                  
                     
                     
                     <Button onClick={() => add_article_button}variant="primary" type="submit" className="submit">Add</Button>
                  </Form>
               </Tab>

               {/* Video Tab */}
               <Tab eventKey="video" title="Video">
                  <Form onSubmit={add_video_button} className="admin-form">
                        <Form.Group>
                           <Form.Label>Title</Form.Label>
                           <Form.Control type="name" id="videoTitle" placeholder="Title" />
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Youtube link</Form.Label>
                           <Form.Control type="name" id="videoURL" placeholder="www.youtube.com" />
                        </Form.Group>
                     
                     <Button onClick={() => add_video_button}variant="primary" type="submit" className="submit">Add</Button>
                  </Form>
               </Tab>
            </Tabs>
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
function add_article_button(){ 

   

   if(document.getElementById("articleTitle").value && 
   document.getElementById("articleDescription").value &&
   document.getElementById("articlePicture").value &&
   document.getElementById("articleWebsite").value)
   {
      if(e) 
      {
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
               type: "article",
               title:document.getElementById("articleTitle").value,
               disc:document.getElementById("articleDescription").value,
               pic:document.getElementById("articlePicture").value,
               website:document.getElementById("articleWebsite").value,
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
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            type: "article",
            title:document.getElementById("articleTitle").value,
            disc:document.getElementById("articleDescription").value,
            pic:document.getElementById("articlePicture").value,
            website:document.getElementById("articleWebsite").value,
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
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            type: "article",
            title:document.getElementById("articleTitle").value,
            disc:document.getElementById("articleDescription").value,
            pic:document.getElementById("articlePicture").value,
            website:document.getElementById("articleWebsite").value,
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

function add_video_button(){ 

   if(document.getElementById("videoTitle").value && document.getElementById("videoURL"))
   {
      if(e) 
      {
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            type: "video",
            title:document.getElementById("videoTitle").value,
            url:document.getElementById("videoURL").value,
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
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            type: "video",
            title:document.getElementById("videoTitle").value,
            url:document.getElementById("videoURL").value,
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
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            type: "video",
            title:document.getElementById("videoTitle").value,
            url:document.getElementById("videoURL").value,
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
      window.alert("Failed, Make sure all fields are full");
   }
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 
 
`