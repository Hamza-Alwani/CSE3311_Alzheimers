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
                    <th>Placemate Forms</th>
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
                    <td>
                    
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="email" placeholder="123-xxx-xxxx" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Time Selection</Form.Label>
                          <Form.Control as="select">
                            <option>12:00</option>
                            <option>1:00</option>
                            <option>2:00</option>
                            <option>3:00</option>
                            <option>4:00</option>
                            <option>5:00</option>
                            <option>6:00</option>
                            <option>7:00</option>
                            <option>8:00</option>
                            <option>9:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                          </Form.Control>

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




`;
