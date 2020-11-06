/// summary
///
///	Outreach 
///   - Compiles the Outreach page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../components_ko/NavigationBar_ko';
import OutreachComponent from '../components_ko/OutreachComponent_ko';
import Footer from '../components_ko/Footer_ko';
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