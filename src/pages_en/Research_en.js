/// summary
///
///	PageNotFound 
///   - Compiles the Research page based on the components entered in below
///
/// summary

import React from 'react';
// components
import ResearchComponent from '../components_en/ResearchComponent_en';
import Footer from '../components_en/Footer_en';
import Nav from '../components_en/NavigationBar_en';

//css
import '../css/main.css'

function Research (){
      return(
         <div className="all-content">
            {/*  Components  */}
            <Nav></Nav>
            <ResearchComponent></ResearchComponent>
            <Footer></Footer>
         </div>
      );   
}
export default Research
