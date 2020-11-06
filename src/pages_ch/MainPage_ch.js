/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_ch/NavigationBar_ch';
import Welcome from '../components_ch/Welcome_ch';
import Footer from '../components_ch/Footer_ch';





function MainPage (){
   return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <Welcome></Welcome>
            <Footer></Footer>
         </div>
      );
   }
export default MainPage
