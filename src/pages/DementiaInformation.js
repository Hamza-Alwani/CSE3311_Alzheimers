
import React from 'react';
import Nav from '../components/Nav';
import DementiaComponent from '../components/DementiaComponent';
import Footer from '../components/Footer'; 

class DementiaInformation extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <DementiaComponent></DementiaComponent>
            <Footer></Footer>
         </div>
      );
   }

    
        
    
}

export default DementiaInformation
