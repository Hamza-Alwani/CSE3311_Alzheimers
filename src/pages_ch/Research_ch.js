/// summary
///
///	PageNotFound 
///   - Compiles the Research page based on the components entered in below
///
/// summary

import React from 'react';
// components
import ResearchComponent from '../components_ch/ResearchComponent_ch';
import Footer from '../components_ch/Footer_ch';
import Nav from '../components_ch/NavigationBar_ch';

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
