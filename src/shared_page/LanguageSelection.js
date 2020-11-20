import React from 'react';
// components
import Langaugepopup from '../shared_comps/LanguagePopUp';
import Footer from '../components/Footer';
import Nav from '../components/NavigationBar';

//css
import '../css/main.css'
import Welcome from '../components/Welcome';

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

