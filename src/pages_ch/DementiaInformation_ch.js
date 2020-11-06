/// summary
///
///	DementiaInformation 
///   - Compiles the DementiaInformation page based on the components entered in below
///
/// summary


import React from 'react';
// components
import Footer from '../components_ch/Footer_ch'; 
import Nav from '../components_ch/NavigationBar_ch';
import DisplayArticle from '../components_ch/DisplayArticle_ch';

//css
import '../css/main.css'

function DementiaInformation() { 
   return(    
      <div className="all-content">
         {/* Components */}
         <Nav></Nav>
         <DisplayArticle></DisplayArticle>
         <Footer></Footer>
       </div>
      );


    
        
    
}

export default DementiaInformation
