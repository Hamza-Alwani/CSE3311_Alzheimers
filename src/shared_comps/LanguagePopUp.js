import React, {useState} from 'react';

import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components'


function LanguagePopUp() {
    const [show, setShow] = useState(false);
  
    function English(){
        setShow(false)
        window.location.href="/home_en"

    }

    function Chinese(){
        setShow(false)
        window.location.href="/home_ch"
    }

    function Korean()
    {
        setShow(false)
        window.location.href="/home_ko"
    }
    

    return (
      <>
        <LanguagePopupContainer>
          <Modal show={true} onHide={English} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title> Select a langugae </Modal.Title>
            </Modal.Header>
            <Modal.Body>Please Select a language 
              <br></br>请选择语言
              <br></br>언어를 선택하세요  </Modal.Body>
            <Modal.Footer>
              
              <Button variant="danger" onClick={English}>
                English
              </Button>

              <Button variant="danger" onClick={Chinese}>
                中文
              </Button>

              <Button variant="danger" onClick={Korean}>             
                한국어
              </Button>
            </Modal.Footer>
          </Modal>
        </LanguagePopupContainer>
      </>
    );
  }
 

  export default LanguagePopUp

const LanguagePopupContainer = styled.nav`



`;