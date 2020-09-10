import React from 'react';
// components
import Nav from '../components/NavigationBar';
import Welcome from '../components/Welcome';
//css
import '../css/genral_formating.css'


function MainPage (){
      return(
         <div>
            <Nav></Nav>
            <Welcome></Welcome>
         </div>
      );
   }

export default MainPage
