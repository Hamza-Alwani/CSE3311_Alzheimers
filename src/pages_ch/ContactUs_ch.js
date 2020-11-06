/// summary
///
///	ContactUs 
///   - Compiles the ContactUs page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../components_ch/NavigationBar_ch';
import ContactUsComponent from '../components_ch/ContactUsComponent_ch';
import Footer from '../components_ch/Footer_ch';


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



   