import React from 'react';
// components
import Langaugepopup from '../shared_comps/LanguagePopUp';
import Footer from '../shared_comps/Footer';
import Nav from '../shared_comps/NavigationBar';

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

