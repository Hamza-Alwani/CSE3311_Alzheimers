/// summary
///
///	CommunityResources 
///   - Compiles the CommunityResources page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../shared_comps/NavigationBar';
import CommunityComponent from '../components/CommunityResources/CommunityComponent';
import Footer from '../shared_comps/Footer'; 

//css
import '../css/main.css'


function CommunityResources() { 

      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <CommunityComponent></CommunityComponent>
            <Footer></Footer>
         </div>
      );
   }

export default CommunityResources
