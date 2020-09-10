import React from 'react';

// components
import Nav from '../components/NavigationBar';
import OutreachComponent from '../components/OutreachComponent';
//css
import '../css/genral_formating.css'


function Outreach (){
      return(
         <div>
            <Nav></Nav>
            <OutreachComponent></OutreachComponent>
     </div>
   );
}    


export default Outreach