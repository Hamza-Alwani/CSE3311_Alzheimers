/// summary
/// write your summary here
/// summary

import React, { Component } from 'react';

// components
import Nav from '../components/NavigationBar';
import Footer from '../components/Footer'; 
import EmailViewer from '../components/EmailViewer';
//import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
//css
import '../css/main.css'





/*
 
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




var keys=[];
function AdminPage (){ 
   

   var i=0;
   firebase.database().ref("/contact_us").on('value', (snapshot)=>{
      snapshot.forEach((childsnapshot)=>{
         var childKey = childsnapshot.key;
         keys[i]=childKey;
         i++
         window.alert(keys);
         });
      });

      
   return(    
         <div className="all-content">
            <Nav></Nav> 
            <div>
            </div>
            <div>
               {
               keys.map(k=>(
                  <EmailViewer 
                  name={k.name}
                  />
               ))
               
               }
            </div>
            <Footer></Footer>
         </div>
      );
   }
   
export default  AdminPage

