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
                      <form>
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname"/>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"/>
                      </form>
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