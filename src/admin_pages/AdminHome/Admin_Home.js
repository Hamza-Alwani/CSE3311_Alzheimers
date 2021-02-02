/// summary
///   Admin home page
///      -  Currently the admin home page features nothing but will be used to display statistics about the website in the future
/// summary

import React from 'react';

// components
import Nav from '../Admin_nav';

//css
import '../../css/main.css'

function Admin_Home()
{
   return(
         <div className="main-component">
            <Nav/>
            <h1>Home page</h1> 
            <br></br>
            <h9>nothing to see here move along</h9>
         </div>
   )
}

export default Admin_Home
