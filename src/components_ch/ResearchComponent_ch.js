/// summary
///
///	Research Component section.  
/// - Should display Professor's schedule and give the user an ability to schedule their own appointments
///
/// summary


import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 
import '../css/survey.css'; 


function ResearchComponent() {
  
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);


  
  return (
        // The div main-component is used to push against the footer
        <div className="main-component">
          
          {/* Title of the page, the div is essential to push against the content below it */}
          <div className="gen_header">
              Research
          </div>

          <ResearchContainer>
            {/* <div className="survey">
              <a href="https://dementiacaregiving.questionpro.com" class="survey-button"> Online Survey </a>
            </div> */}
    

            <div className="research-section">

              {/* Calendly - Embed directly into the code  */}
              <div className="calendly-div">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/dementiacaregiving/30min?text_color=363738&primary_color=ff8400"
                  style={{ width:"100%", height:"750px" }}>
                </div>
              </div>

            </div>
          </ResearchContainer>
        </div>
  );
}

export default ResearchComponent;


// 'style-component package used for infile css'
const ResearchContainer = styled.nav`


.calendly-inline-widget
{
  height:100%;
  width:100%;
}

.calendly-div
{
  height:750px;
  min-width: 320px;
}

.calendly-inline-widget
{
  overflow: hidden;
}

select
{
  margin-top:0px;
}

@media (max-width: 1000px) {
  .main-component
  {
    width:100%;
  }
}


`;
