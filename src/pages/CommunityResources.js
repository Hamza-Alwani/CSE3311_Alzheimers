import React from 'react';
// components
import Nav from '../components/NavigationBar';
import CommunityComponent from '../components/CommunityComponent';
import Footer from '../components/Footer'; 
//css
import '../css/genral_formating.css'


function CommunityResources() { 

      return(
         <div className="all-content">
            <Nav></Nav>
            <div className="gen_header">
            Community Resources
            </div>
            <CommunityComponent></CommunityComponent>
            <Footer></Footer>
         </div>
      );
   }

export default CommunityResources
