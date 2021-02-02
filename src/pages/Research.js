/// summary
///
///	PageNotFound 
///   - Compiles the Research page based on the components entered in below
///
/// summary

import React from 'react';
// components
import ResearchComponent from '../components/ResearchComponents/ResearchComponent';
import Footer from '../shared_comps/Footer';
import Nav from '../shared_comps/NavigationBar';

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
