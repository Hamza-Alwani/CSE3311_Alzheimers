/// summary
/// write your summary here
/// summary

import React, { Component } from 'react';

// components
import Nav from '../components/Admin_nav';
import Footer from '../components/Footer'; 
import EmailViewer from '../components/EmailViewer';
//import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
//css
import '../css/main.css'
import '../css/email_viewer.css'





class Admin_Contact_us_Page extends Component 
{

   constructor()
   {
      super()
      this.state = { 
         ref:[],
         names: [],
         emails: [],
         emailbodys:[],
         post: '',
      }
   }


   componentDidMount()
   {
      const listref=firebase.database().ref().child('contact_us').orderByKey();
      
      listref.once('value', snapshot => {
         snapshot.forEach(child =>{
            this.setState({
               ref:this.state.ref.concat([child.key]),
                names: this.state.names.concat(child.val().name),
                emails: this.state.emails.concat(child.val().email_address),
                emailbodys: this.state.emailbodys.concat(child.val().email_body),
               })
         });
  
      });
     
      
   }

   

   render()
   {
     
      
      return (
         <div>
            <Nav/>
            
           <body>
                 {
              this.state.ref.map((dataList,index)=>
              <EmailViewer 
              id= {this.state.ref[index]}
              name={this.state.names[index]} 
              emailaddress={this.state.emails[index]}
              emailbody={this.state.emailbodys[index]}
              />
              )
           } 
            </body>       
         <Footer/>
         </div>
      )
   }
}

export default Admin_Contact_us_Page
