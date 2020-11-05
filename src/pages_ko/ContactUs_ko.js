/// summary
///
///	ContactUs 
///   - Compiles the ContactUs page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_ko/NavigationBar_ko';
import ContactUsComponent from '../components_ko/ContactUsComponent_ko';
import Footer from '../components_ko/Footer_ko';



function ContactUs() { 
   return(    
      <div className="all-content">
         {/* Components */}
         <Nav></Nav>  
         <ContactUsComponent></ContactUsComponent>
         <Footer></Footer>
      </div>            
   );
}


export default ContactUs



   