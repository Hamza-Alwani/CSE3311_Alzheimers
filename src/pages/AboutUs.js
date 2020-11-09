

import React from 'react';
// components
import AboutUsComponent from '../components/AboutUsComponent';
import CoolBeansComponent from '../components/CoolBeansComponent';
import Footer from '../components/Footer';
import Nav from '../components/NavigationBar';

//css
import '../css/main.css'

function AboutUs() {
   return (
      <div className="all-content">
         {/*  Components  */}
         <Nav></Nav>
         <AboutUsComponent></AboutUsComponent>
         <CoolBeansComponent></CoolBeansComponent>
         <Footer></Footer>
      </div>
   );
}
export default AboutUs