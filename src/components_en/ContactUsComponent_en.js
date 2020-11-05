/// summary
///
///	Contact Us section.  
///   - Used to send questions/messages to the admins via email and admin dashboard
///
/// summary

import React from 'react';
import styled from 'styled-components'
import emailjs from 'emailjs-com'


//firebase
import firebase from'../shared_comps/firebase'

// bootstrap 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

// css
import '../css/main.css'; 



// Basic form component used to take the user's input and later send to admin page/email
function ContactUsComponent() {
   return (
      <div className="contact-div">
         <div className="main-component">

            <div className="contact-us-header">
               Contact Us
            </div>

            <ContactUsContainer>
               <Form onSubmit={sendEmail} className="contact-us-form">
                  <Form.Group>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="name" id="name" name="from_name" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" id="email_address" name="from_email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Message</Form.Label>
                     <Form.Control as="textarea" id="email_body" rows="3" name="message" placeholder="Type your message"/>
                  </Form.Group>
                  <Button variant="danger"  onClick={submit_button_pressed} type="submit" className="submit">Submit</Button>
               </Form>
            </ContactUsContainer>
         </div>
      </div>
   );
}

export default ContactUsComponent;

// Sends an email to Dementia Care Giving's email
function sendEmail(e) {
   e.preventDefault();

   emailjs.sendForm('service_qtft8ti', 'template_ci36bnl', e.target, 'user_8PpvAddXGmdaYVPBt0vX9')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
     e.target.reset();
 }

// Sends the contact-us page information to firebase
function submit_button_pressed(){
   var n=document.getElementById("name").value;
   var eaddress =document.getElementById("email_address").value;
   var ebody= document.getElementById("email_body").value;

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


// 'style-component package used for infile css'
const ContactUsContainer = styled.nav`

   .gen_header
   {
      text-align: center;
   }

   .contact-div
   {
      flex: 1;
   }

   .contact-us-form
   {
      width:50%;
      position: relative;
 
      margin:0 auto;
   }

   @media (max-width: 1000px) {
      .contact-us-form
      {
         width:90%;
         position: relative;
         margin:0 auto;
      }
   }

`