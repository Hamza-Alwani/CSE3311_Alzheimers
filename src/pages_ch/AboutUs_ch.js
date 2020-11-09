import React from 'react';
// components
import AboutUsComponent from '../components_ch/AboutUsComponent_ch';
import AdboutUsDevs from '../shared_comps/AboutUsDevs';
import Footer from '../components_ch/Footer_ch';
import Nav from '../components_ch/NavigationBar_ch';

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