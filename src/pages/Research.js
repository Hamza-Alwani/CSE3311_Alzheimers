
import React from 'react';
// components
import ResearchComponent from '../components/ResearchComponent';
import Footer from '../components/Footer';
import Nav from '../components/NavigationBar';

//css
import '../css/genral_formating.css'

function Research (){
      return(
         <div>
            <Nav></Nav>
            <ResearchComponent></ResearchComponent>
            <Footer></Footer>
         </div>
      );   
}
export default Research
