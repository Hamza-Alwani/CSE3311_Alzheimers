/// summary
/// write your summary here
/// summary

import React from 'react';

// components
import Nav from '../components/NavigationBar';
import Footer from '../components/Footer'; 
import EmailViewer from '../components/EmailViewer'
import  firebase from '../components/firebase'
//css
import '../css/main.css'







var keys=[];
var i=0;  
const ref=firebase.database().ref("/contact_us")

ref.once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      keys[i]=childKey;
      i++
   });
 });


 var keyslist = keys.forEach(function(key){
  return <EmailViewer ref={key}> </EmailViewer>
 })

 




// Change class name 
function AdminPage() { 
  

    
   return(    
         <div className="all-content">
            <Nav></Nav> 
           <h1>{keyslist}</h1>
            <Footer></Footer>
         </div>
      );
   }

export default AdminPage /*	Change this part to match the class name above */
