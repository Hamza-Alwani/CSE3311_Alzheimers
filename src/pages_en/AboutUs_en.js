import React from 'react';
// components
import AboutUsComponent from '../components_en/AboutUsComponent_en';
import AdboutUsDevs from '../shared_comps/AboutUsDevs';
import Footer from '../components_en/Footer_en';
import Nav from '../components_en/NavigationBar_en';

//css
import '../css/main.css'

function AboutUs() {
   return (
      <div className="all-content">
         {/*  Components  */}
         <Nav></Nav>
         <AboutUsComponent></AboutUsComponent>
         <AdboutUsDevs></AdboutUsDevs>
         <Footer></Footer>
      </div>
   );
}
export default AboutUs