/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_ko/NavigationBar_ko';
import Welcome from '../components_ko/Welcome_ko';
import Footer from '../components_ko/Footer_ko';





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
