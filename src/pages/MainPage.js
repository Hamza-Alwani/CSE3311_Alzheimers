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
import Footer from '../components/Footer';





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
