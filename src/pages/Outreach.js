import React from 'react';

// components
import Nav from '../components/NavigationBar';
import OutreachComponent from '../components/OutreachComponent';
import Footer from '../components/Footer';
//css
import '../css/genral_formating.css'


function Outreach (){
      return(
         <div className="all-content">
            <Nav></Nav>
            <OutreachComponent></OutreachComponent>
            <Footer></Footer>
     </div>
   );
}    


export default Outreach