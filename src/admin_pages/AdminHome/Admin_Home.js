/// summary
///   Admin home page
///      -  Currently the admin home page features nothing but will be used to display statistics about the website in the future
/// summary

import React from 'react';

// components
import Nav from '../../shared_comps/Admin_nav';

//css
import '../../css/main.css'

function Admin_Home()
{
   return(
         <div className="main-component">
            <Nav/>
         </div>
   )
}

export default Admin_Home
