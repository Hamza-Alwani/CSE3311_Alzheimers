/// summary
///
///	Outreach 
///   - Compiles the Outreach page based on the components entered in below
///
/// summary

import React from 'react';

// components
import Nav from '../components/NavigationBar';
// import OutreachComponent from '../components/OutreachComponent';
import DisplayOutreach from '../components/DisplayOutreach';
import Footer from '../components/Footer';

//css
import '../css/main.css'


function Outreach (){
      return(
         <div className="all-content">
            {/* Components */}
            <Nav></Nav>
            {/* <OutreachComponent></OutreachComponent> */}
            <DisplayOutreach></DisplayOutreach>
            <Footer></Footer>
     </div>
   );
}    


export default Outreach