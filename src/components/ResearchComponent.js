/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - make a map or use googles maps api for the className="map" section

import React from 'react';
import styled from 'styled-components'
import emailjs from 'emailjs-com';

// bootstrap 
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 


function ResearchComponent() {

  
  return (
        <div className="main-component">

          <div className="gen_header">
              Research
          </div>

          <ResearchContainer>
            <div className="research-section">

              <Table striped bordered hover>

                <thead>
                  <tr>
                    <th>Schedule</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                    <iframe src="https://calendar.google.com/calendar/embed?src=dementiacaregiving.study%40gmail.com&ctz=America%2FChicago" 
                      width="800" 
                      height="600" 
                      frameBorder="0" 
                      scrolling="no"
                      title="google-calendar"
                      >
                    </iframe>
                    </td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th>Schedule An Appointment</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Form onSubmit={sendEmail}>

                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control placeholder="Enter your name" name="from_name"/>
                        </Form.Group>

                        <Form.Group controlId="number-input">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="phone" placeholder="123-456-7890" name="phone"/>
                        </Form.Group>

                        <Form.Group controlId="time-selection">
                          <Form.Label>Time Selection</Form.Label>
                          <Form.Control as="select" name="time">
                            <option>9:00 A.M</option>
                            <option>10:00 A.M</option>
                            <option>11:00 A.M</option>
                            <option>12:00 P.M</option>
                            <option>1:00 P.M</option>
                            <option>2:00 P.M</option>
                            <option>3:00 P.M</option>
                            <option>4:00 P.M</option>
                          </Form.Control>
                          <Button type="submit">Schedule</Button>
                        </Form.Group>

                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ResearchContainer>
        </div>
  );
}

export default ResearchComponent;

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_qtft8ti', 'template_dwruufr', e.target, 'user_8PpvAddXGmdaYVPBt0vX9')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}


//
const ResearchContainer = styled.nav`

iframe
{
  margin: auto;
  display: block;
  width: 100%;
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