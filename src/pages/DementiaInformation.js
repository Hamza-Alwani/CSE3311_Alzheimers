
import React from 'react';
// components
// import DementiaComponent from '../components/DementiaComponent'; not used
import Footer from '../components/Footer'; 
import Nav from '../components/NavigationBar';
import Article from '../components/Article'

//css
import '../css/main.css'
import '../css/dementia_information.css'

function DementiaInformation() { 
   return(    
      <div className="all-content">
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
         <Footer></Footer>
       </div>
      );


    
        
    
}

export default DementiaInformation
