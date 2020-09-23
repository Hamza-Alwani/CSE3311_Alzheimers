/// summary
///
///	Contact Us section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - 

import React from 'react';
import styled from 'styled-components'
import firebase from'../components/firebase'

// bootstrap 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

// css
import '../css/main.css'; 
import '../css/contact_us.css';


// images

function ContactUsComponent() {
  return (
    <div className="contact-div">
      <div className="main-component">

         <div className="gen_header">
            Contact Us
         </div>
         
         <div className="body_text">
            <div className="list">
               <ul><input type="text"       id="name"          placeholder="Name"        /></ul>
               <ul><input type="text"       id="email_address" placeholder="Email Address"/></ul>
               <ul><input type="large_text" id="email_body"    placeholder="Email Body"  /></ul>
               <ul><Button onClick={send_button_pressed} className="send_button">  Send   </Button></ul>
            </div>
         </div>

         <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Name</Form.Label>
               <Form.Control type="name" placeholder="Bing Bong" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Message</Form.Label>
               <Form.Control as="textarea" rows="3" placeholder="Hi Team 2"/>
            </Form.Group>
         </Form>
         <Button varient="danger" onClick={send_button_pressed} className="send_button">Send</Button>
      </div>
    </div>
  );
}

export default ContactUsComponent;



// will move contact_us.css to here in the future after you're done with firebase stuff


function send_button_pressed(){
 var n=document.getElementById("name").value;
 var eaddress =document.getElementById("email_address").value;
 var ebody= document.getElementById("email_body").value;

 //firebase.database().ref('contact_us/').child(eaddress);
 var key=firebase.database().ref('contact_us').push().key;
 firebase.database().ref('contact_us/'+key).set({
    name:n,
    email_address:eaddress,
    email_body:ebody,
 },function(error){
    if(error){
       window.alert("no");
    }else{
       window.alert("yes");

    }
 });
}

const ContactUsContainer = styled.nav`





`