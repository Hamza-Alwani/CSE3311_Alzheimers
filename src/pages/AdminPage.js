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




// function AdminPage (){ 
//    var keys = [   ];

//    var i=0;


   
//    firebase
//       .database()
//       .ref("/contact_us")
//       .on('value', (snapshot)=>{
//          snapshot.forEach((childsnapshot)=>{
//             var childKey = childsnapshot.key;
//             keys[i]=childKey;
//             i++
//          // window.alert(keys);
//          });
//       });

//       console.log(keys);
      
      
//    return(    
//          <div className="all-content">
//             <Nav></Nav> 
//             <div>
//             </div>
//             <div>

//                {  
//                   <EmailViewer 
//                   name={keys}
//                   />
                  
//                }
               
//             </div>
//             <Footer></Footer>
//          </div>
//       );
//    }

   
// export default  AdminPage


// operates the same way as a function, but you can manipulate data with other functions and use lifecycle methods
class AdminPage extends Component 
{
   // construct and object to save data
   constructor()
   {
      super()
      this.state = { 
         emails: []
      }
   }

   // life cycle method coming from the Component library
   componentDidMount()
   {
      var keys = []
      var i;

      firebase
      .database()
      .ref("/contact_us")
      .on('value', (snapshot)=>{
         snapshot.forEach((childsnapshot)=>{
            var childKey = childsnapshot.key;
            keys[i]=childKey;
            i++

            // proper way to update an object's array
            var joined = this.state.emails.concat(childKey);
            this.setState({ emails: joined })
         });
      });

      
   }
   


   render()
   {

      // EmailViewer takes all the emails, i was just too lazy to list them all
      return (
         <div>
            <Nav/>
            <EmailViewer emails={this.state.emails}/>
            <Footer/>
         </div>
      )
   }
}

export default AdminPage
