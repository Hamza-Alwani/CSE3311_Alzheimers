/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Welcome from '../components/Welcome';


function MainPage (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <Welcome></Welcome>
         </div>
      );
   }

export default MainPage
