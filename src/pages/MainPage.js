
import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav';
import Welcome from '../components/Welcome';
import { Component } from 'react';

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
