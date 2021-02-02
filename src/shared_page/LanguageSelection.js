import React from 'react';
// components
import Langaugepopup from '../shared_comps/LanguagePopUp';
import Footer from '../components/Footer';
import Nav from '../components/NavigationBar';

//css
import '../css/main.css'
import Homepage from '../components/HomePageComponents/Home';

function langauageselection() {
   return (
       <div>
        <Nav></Nav>
        <Homepage></Homepage>
        <Langaugepopup> </Langaugepopup>
        
       </div>
 
   
        

   );
}
export default langauageselection

