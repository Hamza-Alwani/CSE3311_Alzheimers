/// summary
///
///	Outreach 
///   - Compiles the Outreach page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../components_en/NavigationBar_en';
import OutreachComponent from '../components_en/OutreachComponent_en';
import Footer from '../components_en/Footer_en';
//css
import '../css/main.css'


function Outreach (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            <OutreachComponent></OutreachComponent>
            <Footer></Footer>
     </div>
   );
}    


export default Outreach