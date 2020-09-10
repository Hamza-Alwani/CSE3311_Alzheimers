
import React from 'react';
// components
import DementiaComponent from '../components/DementiaComponent';
import Footer from '../components/Footer'; 
import Nav from '../components/NavigationBar';
import Article from '../components/Article'
//css
import '../css/genral_formating.css'
import '../css/dementia_information.css'

function DementiaInformation() { 
   return(    
      <div>
         <Nav></Nav>
         <div className="gen_header">
            Dementia Information
         </div>
         <div className="article">
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article> 
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
         </div>
       </div>
      );


    
        
    
}

export default DementiaInformation
