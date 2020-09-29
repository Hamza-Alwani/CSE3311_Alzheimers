/// summary
///
///	PageNotFound 
///   - When a 404 error is returned to the user.
///
/// summary

import React from "react"
// components
import Nav from '../components/NavigationBar';

//css
import '../css/main.css'



function PageNotFound() { 
 
    return(
      <div className="all-content">
        <Nav></Nav>    
          <div className="gen_header">ERROR 404 : PAGE NOT FOUND </div>
      </div>
    );
}

 
export default PageNotFound