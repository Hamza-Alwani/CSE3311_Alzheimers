/// summary
///
///	CommunityResources 
///   - Compiles the CommunityResources page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../components_en/NavigationBar_en';
import CommunityComponent from '../shared_comps/CommunityComponent';
import Footer from '../components_en/Footer_en'; 

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
