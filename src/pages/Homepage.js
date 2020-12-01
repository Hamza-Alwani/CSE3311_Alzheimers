/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Homepage from '../components/Homepage';



function MainPage (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <Homepage></Homepage>
         </div>
      );
   }

export default MainPage
