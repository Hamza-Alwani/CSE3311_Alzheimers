/// summary
///
///	DementiaInformation 
///   - Compiles the DementiaInformation page based on the components entered in below
///
/// summary


import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Footer from '../components/Footer'; 
import DisplayArticle from '../components/DisplayArticle';

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
