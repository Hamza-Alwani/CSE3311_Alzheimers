import React from 'react';

// components
//import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
//css
import '../css/main.css'
import '../css/email_viewer.css'
import { Button } from 'react-bootstrap';


function Admin_DemInfoViewer(obj) 
{
    return(
        <div className="boundry">
        <div className="body">
           {
               <div>
              <p>
                 ref={obj.id}
                 <br></br>
                 discrpition={obj.disc}
                 <br></br>
                 pic_url={obj.pic}
                 <br></br>
                 title={obj.title}
                 <br></br>
                 link={obj.website}
              </p>                       
               <Button onClick={() => delete_button_pressed(obj.id)}>Delete</Button>
               </div>
           }
        </div>
       
    </div>
    )
}
export default Admin_DemInfoViewer

 
  function delete_button_pressed(obj){
   
    firebase.database().ref('Article').child(obj).remove().then(function(){
        window.alert("Message Deleted");
        window.location.reload(false);
     }).catch(function(error){
     });
  }