

import React from 'react';
import Nav from '../components/NavigationBar';
import Welcome from '../components/Welcome';

class MainPage extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <Welcome></Welcome>
         </div>
      );
   }

    
        
    
}

export default MainPage
