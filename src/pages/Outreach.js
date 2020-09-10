
import React from 'react';
import Nav from '../components/NavigationBar';
import OutreachComponent from '../components/OutreachComponent';

class Outreach extends React.Component{

   render(){

      return(
         <div>
            <Nav></Nav>
            <OutreachComponent></OutreachComponent>
         </div>
      );
   }    
}

export default Outreach
