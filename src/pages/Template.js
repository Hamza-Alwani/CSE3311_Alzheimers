/// summary
/// write your summary here
/// summary

import React from 'react';

// components
import Nav from '../components/Nav';
import Footer from '../components/Footer'; 
import '../css/genral_formating.css'
// remember to import your components


// Change class name 
function Template() { 
   return(    
         <div className="all-content">
            <Nav></Nav>
            <div className="gen_header">
            *Title*
            </div>
        	   {/*add in your components in the middle here*/}
            <Footer></Footer>
         </div>
      );
   }

    
        
    


export default Template /*	Change this part to match the class name above */
