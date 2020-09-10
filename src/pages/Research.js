
import React from 'react';

import ResearchComponent from '../components/ResearchComponent';
import Footer from '../components/Footer';
import Nav from '../components/NavigationBar';


class Research extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <ResearchComponent></ResearchComponent>
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default Research
