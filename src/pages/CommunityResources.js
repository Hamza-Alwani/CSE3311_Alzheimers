

import React from 'react';

// components
import Nav from '../components/Nav';
import CommunityResources from '../components/CommunityResources';
import Footer from '../components/Footer'; 



class ComunityResources extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <CommunityResources></CommunityResources>
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default ComunityResources
