/// summary
///
///	Community Resource section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - maybe make a map or use googles maps api for the className="map" section

import React, {useState} from 'react';
import styled from 'styled-components'

// bootstrap components
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'

// css
import '../css/main.css'; 

// images 
import carrollton from '../pictures/carrollton.jpg'; 

function CommunityComponent() {
  return (
    <div className="main-component">

      {/* Header */}
      <div className="gen_header">
               Community Resources
      </div>


      {/* Drop down to pick citys */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  Pick your city
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Dallas</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Los Angeles</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>Washington D.C</Dropdown.Item>
                  <Dropdown.Item eventKey="1">Bing Bong</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
      </Table>

      {/* Information about city */}
      <CommunityContainer>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1429841093804!2d-96.90088378481364!3d32.947234180921015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c26479a675835%3A0x62ceba99e3d9f122!2s1618%20Kirby%20Rd%2C%20Carrollton%2C%20TX%2075006!5e0!3m2!1sen!2sus!4v1600039910371!5m2!1sen!2sus" 
                  width="100%" 
                  height="200%" 
                  frameborder="0" 
                  allowfullscreen="" 
                  aria-hidden="false" 
                  tabindex="0"
                  title="comthing"
                  >
                  
                </iframe>
              </td>
              
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name of Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p><strong>Phone Number:</strong> 972-245-1573</p>
                <p><strong>Address:</strong> 1618 Kirby Rd</p>
                <p><strong>Website:</strong> https://carrolltonhealth.com</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </CommunityContainer>
    </div>
  );
}

export default CommunityComponent;

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="www.google.com"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

  

const CommunityContainer = styled.div`
.community-div
{
  flex: 1;
}

`;
