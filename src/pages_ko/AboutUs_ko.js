import React from 'react';
// components
import AboutUsComponent from '../components_ko/AboutUsComponent_ko';
import Footer from '../components_ko/Footer_ko';
import Nav from '../components_ko/NavigationBar_ko';

//css
import '../css/main.css'

function AboutUs() {
   return (
      <div className="all-content">
         {/*  Components  */}
         <Nav></Nav>
         <AboutUsComponent></AboutUsComponent>
         <Footer></Footer>
      </div>
   );
}
export default AboutUs