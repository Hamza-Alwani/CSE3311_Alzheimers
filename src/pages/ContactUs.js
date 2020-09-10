import React from 'react';
// components
import Nav from '../components/NavigationBar';
import ContactUsComponent from '../components/ContactUsComponent';
import Footer from '../components/Footer';

// firebase 


function ContactUs() { 
   return(    
      <div className="all-content">
         <Nav></Nav>  
         <ContactUsComponent></ContactUsComponent>
         <Footer></Footer>
      </div>            
   );
}


export default ContactUs



   