/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Home from '../components/HomePageComponents/Home';
import Footer from '../components/Footer';


function MainPage (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <Home></Home>
            
            

         </div>
      );
   }

export default MainPage
