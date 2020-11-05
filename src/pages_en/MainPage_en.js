/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_en/NavigationBar_en';
import Welcome from '../components_en/Welcome_en';
import Footer from '../components_en/Footer_en';





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
