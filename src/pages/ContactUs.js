
import React from 'react';
import Nav from '../components/Nav';
import Button from 'react-bootstrap/Button'

// css
import  '../css/main.css'; 
import '../css/contact_us.css';


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
