/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../shared_comps/NavigationBar';
import Home from '../components/HomePageComponents/Home';
import Footer from '../shared_comps/Footer';


function MainPage (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <Home></Home>
            <Footer></Footer>
            

         </div>
      );
   }

export default MainPage
