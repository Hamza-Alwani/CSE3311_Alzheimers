/// summary
/// write your summary here
/// summary

import React from 'react';

// components
import Nav from '../components/Nav';
import Footer from '../components/Footer'; 

// remember to import your components


// Change class name 
class Template extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
        	{/*add in your components in the middle here*/}
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default Template {/*	Change this part to match the class name above */}
