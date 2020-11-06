/// summary
///
///	PageNotFound 
///   - Compiles the Research page based on the components entered in below
///
/// summary

import React from 'react';
// components
import ResearchComponent from '../components_ko/ResearchComponent_ko';
import Footer from '../components_ko/Footer_ko';
import Nav from '../components_ko/NavigationBar_ko';

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
