/// summary
///
///	EmailViewer
///   - This component will display on the admin page so an admin can read messages without having access their the Professor's email
///
/// summary

import React from 'react';
// components
import { Button } from 'react-bootstrap';
import  firebase from '../components/firebase'
//css
import '../css/email_viewer.css'




// Function will display all messages in order of oldest to newest message.
function EmailVeiwer(obj) 
{
   return(    
         <div className="boundry">
             <div className="body">
                {
                   <p>
                      name={obj.name}
                      <br></br>
                      email={obj.emailaddress}
                      <br></br>
                      emailbody={obj.emailaddress}
                   </p>                       
                }
             </div>
             <Button onClick={() => delete_button_pressed(obj.id)}>Delete</Button>
         </div>
      );
}

export default EmailVeiwer 


// Tells firebase to delete a message with a specific ID on the Contact Us admin page. 
function delete_button_pressed(obj){
   firebase.database().ref('contact_us').child(obj).remove().then(function(){
      window.alert("Message Deleted");
      window.location.reload(false);
   }).catch(function(error){
   });
}

  
      
  
