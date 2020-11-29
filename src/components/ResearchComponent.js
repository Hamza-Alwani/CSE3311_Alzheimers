/// summary
///
///	Research Component section.  
/// - Should display Professor's schedule and give the user an ability to schedule their own appointments
///
/// summary


import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

// bootstrap
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 
import '../css/survey.css'; 

// translation
import strings from '../translation/ResearchLang.js'
strings.setLanguage(localStorage.getItem("Language"));

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

  const [show, setShow] = useState(false);
  setTimeout(function(){ setShow(true)}, 10000)
    
  return (
        // The div main-component is used to push against the footer
        <div className="main-component">
          
          {/* Title of the page, the div is essential to push against the content below it */}
          <div className="gen_header">
          {strings.Header}
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
                  data-url="https://calendly.com/dementiacaregiving/60min?text_color=363738&primary_color=ff8400"
                  style={{ width:"100%" }}>
                </div>
              </div>
            </div>


          </ResearchContainer>

          <PopupContainer>
            {/* After X seconds show the survey button */}
            <Toast className="popup-survey-container" onClose={() => setShow(false)} show={show} delay={10000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Dementia Survey<br></br></strong>
                  {/* <small>UTA sponsor survey</small> */}
                </Toast.Header>
                <Toast.Body className="pop-survey-body"><Button href="https://dementiacaregiving.questionpro.com" onClick={() => setShow(false)}>Link</Button> </Toast.Body>
              </Toast>
          </PopupContainer>
        </div>
  );
}

export default ResearchComponent;


// 'style-component package used for infile css'
const PopupContainer = styled.nav`
  /* Survey popup */
  .popup-survey-container
  {
    position: fixed;
    bottom: 0;
    right: 10%;
    z-index: 10;
  }

  .pop-survey-body
  {
    margin-right: 100px;
  }

  @media (max-width: 1000px) {
    .popup-survey-container
    {
      right: 0;
    }
}

`


const ResearchContainer = styled.nav`

/* Calendly CSS */
.calendly-inline-widget
{
  flex: 1;
  height:100%;
  width:100%;
}

.calendly-div
{
  display: flex;
  height: 950px;
  min-width: 320px;
}

.calendly-inline-widget
{
  overflow: hidden;
}


@media (max-width: 1000px) {
  .main-component
  {
    width:100%;
  }
}


`;
