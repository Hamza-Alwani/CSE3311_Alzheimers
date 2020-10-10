/// summary
///   In development - main admin page where the admin can create, delete, edit features.
/// summary

import React from 'react';

// components
import Auth from './Auth'
//css
import '../css/main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import  firebase from '../components/firebase';




function AdminPage_login()
{
   
     
         
   return(
        <div>
          <Form className="contact-us-form">
            <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Email</Form.Label>
               <Form.Control type="Emailaddress" id="email_txt" name="email_txt" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" id="pass_txt" name="pass_txt" placeholder="Password" />
            </Form.Group>

                  <Button varient="danger"  onClick={submit_button_pressed} type="" className="submit">Login</Button>
               </Form>
        </div>
   );
   
   

}

export default AdminPage_login

function submit_button_pressed(){
   
 const email= document.getElementById("email_txt").value;
 const pass = document.getElementById("pass_txt").value;
 const auth= firebase.auth();
auth.signInWithEmailAndPassword(email,pass)
.catch(function(error){
   window.alert(error)
})

  
  
}

