/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - maybe make a map or use googles maps api for the className="map" section

import React from 'react';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'

// css
import '../css/main.css'; 

// images 
import carrollton from '../pictures/carrollton.jpg'; 

function CommunityComponent() {
  return (
    <div className="main-component">
      <div className="gen_header">
               Community Resources
      </div>

        <CommunityContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Map</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </Table>
        </CommunityContainer>
    </div>
  );
}

export default CommunityComponent;


const CommunityContainer = styled.div`
.community-div
{
  flex: 1;
}

`;
