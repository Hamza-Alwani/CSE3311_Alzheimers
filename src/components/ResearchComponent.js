/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - make a map or use googles maps api for the className="map" section

import React from 'react';


// css
import '../css/main.css'; 
import '../css/research.css';

// images
import interview from '../pictures/interview.png';

function ResearchComponent() {
  return (
    <div className="research-div">
      <div className="main-component">

        <h1>Research</h1>

        <div className="research-section">

          <div className="interview">
            <h3>Schedule a Telephone Interview</h3>
            {/*placeholder until we make a scheduler*/}
            <img src={interview} width="80%"/>
          </div>

          <div className="survey">

            <div className="survey-top">
              <h3>Online Survey</h3>
              {/*placehold until we have a survey idea*/}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod nisi. Nunc scelerisque viverra mauris in aliquam sem fringilla. Quis ipsum suspendisse ultrices gravida. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. In metus vulputate eu scelerisque felis imperdiet proin. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Adipiscing tristique risus nec feugiat in. Neque sodales ut etiam sit amet nisl purus. Sed turpis tincidunt id aliquet risus feugiat.</p>
            </div>
            
            {/*<div className="survey-bottom">
              <form>
                <input type="button" value="Survey" onclick="msg()"/>
              </form>
            </div>*/}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchComponent;
