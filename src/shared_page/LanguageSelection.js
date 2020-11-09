import React from 'react';
// components
import Langaugepopup from '../shared_comps/LanguagePopUp';
import Footer from '../components_en/Footer_en';
import Nav from '../components_en/NavigationBar_en';

//css
import '../css/main.css'
import Welcome from '../components_en/Welcome_en';

function langauageselection() {
   return (
       <div>
        <Nav></Nav>
        <Welcome></Welcome>
        <Langaugepopup> </Langaugepopup>
        <Footer></Footer>
       </div>
 
   
        

   );
}
export default langauageselection

