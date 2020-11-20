import React from 'react';

import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components'


function LanguagePopUp() {
  
    function English(){
        localStorage.setItem("Language", "en");
        window.location.href="/home"

    }

    function Chinese(){
        localStorage.setItem("Language", "ch");
        window.location.href="/home"
    }

    function Korean()
    {
        localStorage.setItem("Language", "ko");
        window.location.href="/home"
    }
    

    return (
      <>
          <Modal show={true} onHide={English} aria-labelledby="contained-modal-title-vcenter" centered>
          <LanguagePopupContainer>
            <Modal.Header closeButton>
              <Modal.Title className="lang-selection-title"> Select your preferred language </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="lang-button-container" >
              <br></br>
                <Button className="lang-selection-button" variant="white" onClick={English}>
                  English
                </Button>

                <Button className="lang-selection-button" variant="white" onClick={Chinese}>
                  中文
                </Button>

                <Button className="lang-selection-button" variant="white" onClick={Korean}>             
                  한국어
                </Button>
                <br></br>
                <br></br>
              </div>
            </Modal.Body>  
            <Modal.Footer>
              <br></br>
            </Modal.Footer>
            </LanguagePopupContainer>
          </Modal>
      </>
    );
  }
 

  export default LanguagePopUp

const LanguagePopupContainer = styled.nav`

.lang-selection-title
{
  font-size: 25px
}

.lang-button-container
{
  text-align: center;
  ${'' /* blackground:  */}
}

.lang-selection-button
{
  opacity: 0.9;
  width: 33%;
  font-size: 25px;
}
.lang-selection-button:hover
{
  background: black;
  color: white;
 
}

@media only screen and (max-width: 600px) {
  .lang-selection-title
  {
    font-size: 20px
  }

  .lang-selection-button
  {
    opacity: 0.9;
    width: 33%;
    font-size: 20px;
  }
}

`;