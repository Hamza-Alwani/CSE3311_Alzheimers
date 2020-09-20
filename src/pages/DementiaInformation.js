
import React from 'react';
// components
// import DementiaComponent from '../components/DementiaComponent'; not used
import Footer from '../components/Footer'; 
import Nav from '../components/NavigationBar';
import DisplayArticle from '../components/DisplayArticle'

//css
import '../css/main.css'

function DementiaInformation() { 
   return(    
      <div className="all-content">
         <Nav></Nav>
         <div className="gen_header">
            Dementia Information
         </div>
         <DisplayArticle></DisplayArticle>
         <Footer></Footer>
       </div>
      );


    
        
    
}

export default DementiaInformation
