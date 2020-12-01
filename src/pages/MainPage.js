/// summary
///
///	MainPage 
///   - Compiles the Welcome page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components/NavigationBar';
import NewHomepage from '../components/newHomepage1';
import Footer from '../components/Footer';



function MainPage (){
      return(
         <div className="all-content">
            {/* Components */}
            {/*<Nav></Nav>*/}
            <NewHomepage></NewHomepage>
            {/*<Footer></Footer>*/}
         </div>
      );
   }

export default MainPage
