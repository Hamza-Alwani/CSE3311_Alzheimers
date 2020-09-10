

import React from 'react';
import Nav from '../components/NavigationBar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

class MainPage extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <Welcome></Welcome>
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default MainPage
