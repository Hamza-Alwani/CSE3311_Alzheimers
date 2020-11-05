import React, {useState} from 'react';

import {Modal, Button} from 'react-bootstrap'


function LanguagePopUp() {
    const [show, setShow] = useState(false);
  
    function English(){
        sessionStorage.setItem('lang','en')
        setShow(false)
        window.location.href="/home_en"

    }

    function Chinese(){
        sessionStorage.setItem('lang','ch')
        setShow(false)
        window.location.href="/home_ch"
    }

    function Korean()
    {
        sessionStorage.setItem("lang",'ko')
        setShow(false)
        window.location.href="/home_ko"
    }
  

    return (
      <>
        <Modal show={true} onHide={English}>
          <Modal.Header closeButton>
            <Modal.Title> Select a langugae </Modal.Title>
          </Modal.Header>
          <Modal.Body>Please Select a language 
            <br></br>请选择语言
            <br></br>언어를 선택하세요  </Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={English}>
              English
            </Button>

            <Button variant="primary" onClick={Chinese}>
              中文
            </Button>

            <Button variant="primary" onClick={Korean}>             
              한국어
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 

  export default LanguagePopUp