/// summary
///   Admin Login page - must enter in correct credentials to modify pages of Community Resources and Dementia Information
/// summary

import React, { useEffect } from 'react';
import styled from 'styled-components'
import firebase from '../shared_comps/firebase';

// bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


// css
import '../css/main.css'

function AdminPage_Login()
{
   useEffect(() => {
      firstcheck();
   })

   return(
      <AdminLoginStyle>
         <div className="admin-login-container">
            {/* Header of the page */}
            <div className="login-header">
               Admin Login
            </div>

            {/* Admin login form */}
            <div className="login-divider"></div>
               <Form className="admin-login-form">
                  <Form.Group controlId="exampleForm.ControlInput1">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="Emailaddress" id="email_txt" name="email_txt" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" id="pass_txt" name="pass_txt" placeholder="Password" />
                  </Form.Group>

                  <Button varient="red"  onClick={login_press} type="" className="admin-login">Login</Button>
               </Form>
            </div>
      </AdminLoginStyle>
   );
}

export default AdminPage_Login

// Check if the user is already logged in
function firstcheck(){
      if(sessionStorage.getItem("user"))
      {
         window.location.href="/admin_home"
      }
}

// Login function to check with firebase so the user can login
function login_press(){ 
   const email= document.getElementById("email_txt").value;
   const pass = document.getElementById("pass_txt").value;
   const auth= firebase.auth();
   auth.signInWithEmailAndPassword(email,pass)
   .then(function(){
      window.location.href="/admin_home"
   })
   .catch(function(error){
      window.alert(error)
   })
}


// 'style-component package used for infile css'
const AdminLoginStyle = styled.nav`

.login-header
{
   text-align: center;
   font-size: 3rem;
}

.login-divider
{
   margin-bottom: 3rem;
}

.admin-login-container {
  position: absolute;
  left: 50%;
  top: 45%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  width: 20%;

}

.admin-login
{
   margin-top: 2rem;
   float: right;
}

 `;
 