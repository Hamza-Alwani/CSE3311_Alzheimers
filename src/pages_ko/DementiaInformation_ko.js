/// summary
///
///	DementiaInformation 
///   - Compiles the DementiaInformation page based on the components entered in below
///
/// summary


import React from 'react';
// components
import Footer from '../components_ko/Footer_ko'; 
import Nav from '../components_ko/NavigationBar_ko';
import DisplayArticle from '../components_ko/DisplayArticle_ko';

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
