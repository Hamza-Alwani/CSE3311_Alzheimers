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

// bootstrap 
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 
import '../css/survey.css'; 


function ResearchComponent() {

  
  return (
        <div className="main-component">

          <div className="gen_header">
              Research
          </div>

          <ResearchContainer>
    
            <div className="survey">
              <a href="https://dementiacaregiving.questionpro.com" class="survey-button"> Online Survey </a>
            </div>
    
            <div class="divider"/>
    
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
                    
                      <Form>
                        <Form.Group controlId="email-input">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group controlId="number-input">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="email" placeholder="123-xxx-xxxx" />
                        </Form.Group>

                        <Form.Group controlId="time-selection">
                          <Form.Label>Time Selection</Form.Label>
                          <Form.Control as="select">
                            <option>9:00 A.M</option>
                            <option>10:00 A.M</option>
                            <option>11:00 A.M</option>
                            <option>12:00 P.M</option>
                            <option>1:00 P.M</option>
                            <option>2:00 P.M</option>
                            <option>3:00 P.M</option>
                            <option>4:00 P.M</option>
                          </Form.Control>

                          <Button variant="danger" href="https://open.kakao.com/o/gPYKtsqc">Schedule</Button>

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




`;
