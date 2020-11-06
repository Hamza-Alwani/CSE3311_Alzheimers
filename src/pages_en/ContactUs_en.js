/// summary
///
///	ContactUs 
///   - Compiles the ContactUs page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_en/NavigationBar_en';
import ContactUsComponent from '../components_en/ContactUsComponent_en';
import Footer from '../components_en/Footer_en';



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



   