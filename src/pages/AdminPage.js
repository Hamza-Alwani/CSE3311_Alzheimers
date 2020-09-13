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
import { Button } from 'react-bootstrap';
import '../css/email_viewer.css'





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
         ref:[],
         names: [],
         emails: [],
         emailbodys:[],
         post: '',
      }
   }

   // life cycle method coming from the Component library
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
      // EmailViewer takes all the emails, i was just too lazy to list them all
      
      return (
         <div>
            <Nav/>
            
           <body>
                 {
              this.state.ref.map((dataList,index)=>
              <div className="boundry">
                <div className="body">
                     <p>  
                        name={this.state.names[index]}
                        <br></br>
                        emailaddress={this.state.emails[index]}
                        <br></br>
                        emailbody={this.state.emailbodys[index]}
                        <br></br>
                        <Button > Delete </Button>
                     </p>
                  </div> 
                </div>
              )
           } 
                 

              
           </body>
          
              
            <Footer/>
         </div>
      )
   }
}

export default AdminPage
