import React from 'react';
// components
import AboutUsComponent from '../components/AboutUsComponents/AboutUsComponent';
import AboutUsDevs from '../components/AboutUsComponents/AboutUsDevs';
import Footer from '../shared_comps/Footer';
import Nav from '../shared_comps/NavigationBar';

//css
import '../css/main.css'

function AboutUs() {
   return (
      <div className="all-content">
         {/*  Components  */}
         <Nav></Nav>
         <AboutUsComponent></AboutUsComponent>
         <AboutUsDevs></AboutUsDevs>
         <Footer></Footer>
      </div>
   );
}
export default AboutUs