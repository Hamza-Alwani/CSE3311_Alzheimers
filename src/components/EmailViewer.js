
/// summary
/// write your summary here
/// summary

import React from 'react';
// components
import { Button } from 'react-bootstrap';
import  firebase from '../components/firebase'
//css
import '../css/email_viewer.css'





function EmailVeiwer(ref) 
{
    
   return(    
         <div className="boundry">
             <div className="body">
               <div>{ref}</div>
             </div>
             <Button> Delete </Button>
         </div>
      );
   }

    
        
    

 

export default EmailVeiwer /*	Change this part to match the class name above */
