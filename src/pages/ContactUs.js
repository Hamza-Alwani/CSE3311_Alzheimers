
import React, { createRef } from 'react';
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom';

import Nav from '../components/Nav';
import  '../css/gen.css'; 
import '../css/ContactUs.css';


class ContactUs extends React.Component{

   render(){
      return(
         <div>
            <Nav></Nav>  

            <div className="header_text">
               <h1>Contact Us</h1> 
            </div>
            <div className="body_text">
               <div className="list">
                  <ul><input type="text"       id="name"          name="firstname" placeholder="name"        /></ul>
                  <ul><input type="text"       id="email_address" name="firstname" placeholder="Email Adress"/></ul>
                  <ul><input type="large_text" id="email_body"    name="firstname" placeholder="Email Body"  /></ul>
                  <ul><Button className="send_button">  Send   </Button></ul>
                                
               </div>
            </div>
          </div>            
      );
   }
}

export default ContactUs
