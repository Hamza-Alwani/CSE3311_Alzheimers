import React, {useState, useEffect } from 'react';

import {Modal, Button} from 'react-bootstrap'
import { render } from 'react-dom';

function Example() {
    const [show, setShow] = useState(false);
  
    function English(){
        sessionStorage.setItem('lang','en')
        setShow(false)

    }

    function Chinese(){
        sessionStorage.setItem('lang','ch')
        setShow(false)
    }

    function Korean()
    {
        sessionStorage.setItem("lang",'ko')
        setShow(false)
    }
    
    const handleShow = () => setShow(true);
  

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={English}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={English}>
              English
            </Button>

            <Button variant="primary" onClick={Chinese}>
                Chinese
            </Button>

            <Button variant="primary" onClick={Korean}>
                Korean
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 

  export default Example