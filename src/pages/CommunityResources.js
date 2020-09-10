

import React from 'react';
import Nav from '../components/NavigationBar';
import CommunityComponent from '../components/CommunityComponent';
import Footer from '../components/Footer'; 



class CommunityResources extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <CommunityComponent></CommunityComponent>
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default CommunityResources
