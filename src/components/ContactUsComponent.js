/// summary
///
///	Contact Us section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - 

import React from 'react';
import Button from 'react-bootstrap/Button';


// css
import '../css/main.css'; 
import '../css/contact_us.css';
import '../css/genral_formating.css'

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
               <ul><Button className="send_button">  Send   </Button></ul>
            </div>
         </div>

      </div>
    </div>
  );
}

export default ContactUsComponent;
