/// summary
///
///	ContactUs 
///   - Compiles the ContactUs page based on the components entered in below
///
/// summary

import React from 'react';
// components
import Nav from '../shared_comps/NavigationBar';
import ContactUsComponent from '../components/ContactUsComponents/ContactUsComponent';
import Footer from '../shared_comps/Footer';



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



   