import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import *as firebase from  'firebase';
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
               <ul><input type="text"       id="username"          placeholder="Name"        /></ul>
               <ul><input type="text"       id="email_address" placeholder="Email Address"/></ul>
               <ul><input type="large_text" id="email_body"    placeholder="Email Body"  /></ul>
               <ul><Button  onClick={send_button_pressed} id="send_button" className="send_button">  Send   </Button></ul>
            </div>
         </div>
         <Footer></Footer>
      </div>            
   );
}


export default ContactUs





var firebaseConfig = {
    apiKey: "AIzaSyCrokXMvBewGnbmqrmBjDCMGdcuzsjVEdI",
    authDomain: "alzeihmerstudy.firebaseapp.com",
    databaseURL: "https://alzeihmerstudy.firebaseio.com",
    projectId: "alzeihmerstudy",
    storageBucket: "alzeihmerstudy.appspot.com",
    messagingSenderId: "745356370697",
    appId: "1:745356370697:web:d4b0aed1fa17c058ac69d8",
    measurementId: "G-RZ32M5TQ6J"
  };

firebase.initializeApp(firebaseConfig);

function send_button_pressed(){
   var n=document.getElementById("username").value;
   var eaddress =document.getElementById("email_address").value;
   var ebody= document.getElementById("email_body").value;
   var send_button= document.getElementById("send_button");
   
   firebase.database().ref('contact_us/').child(eaddress);
   firebase.database().ref('contact_us/'+eaddress).set({
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
   