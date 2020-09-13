
/// write your summary here
/// summary

import React from 'react';
// components
import { Button } from 'react-bootstrap';
import  firebase from '../components/firebase'

//css
import '../css/email_viewer.css'


/*
var keys=[];
var i=0;  
const ref=firebase.database().ref("/contact_us")
ref.once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      return keys[i]=childKey;
      i++
   });
   return keys;
 });

 const keyslist=keys.map((element) =>
 <li>{element}</li>
 );

 
firebase.database().ref("/contact_us").on('value', (snapshot)=>{
   snapshot.forEach((childsnapshot)=>{
      var childKey = snapshot.key;
      let keys = Object.keys(childKey);
      keys.forEach((key) => {  
      window.alert(keys.valueOf(key));
      });
   });
 //  var childKey = snapshot.key;
  // window.alert(childKey);
  // let keys = Object.keys(childKey);
  // keys.forEach((key) => {  });
});
*/


function EmailVeiwer(index,name,email,body) 
{
   // console.log("EmailVietwe");
   

   return(    
         <div className="boundry">
             <div className="body">
                {
                  
                   
                                    
                }
             </div>
             <Button> Delete </Button>
         </div>
      );

}


    
        
    

 

export default EmailVeiwer /*	Change this part to match the class name above */
