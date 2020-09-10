import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Button from 'react-bootstrap/Button'
// css
import '../css/main.css'; 
import '../css/contact_us.css';
import '../css/genral_formating.css'


function ContactUs() { 
   return(    
      <div>
         <Nav></Nav>  
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
   );
}

export default ContactUs
