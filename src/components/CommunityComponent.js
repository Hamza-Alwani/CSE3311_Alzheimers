/// summary
///
/// The component should be able to be inserted into the community page
/// 
///
/// summary


import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// firebase imports
import firebase from '../components/firebase';


// bootstrap components
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'

// css
import '../css/main.css'; 

// images 

function CommunityComponent() {

  const [name, setName] = useState('Error: No title set');
  const [phone, setPhone] = useState('Error: No phone number pulled');
  const [address, setAddress] = useState('Error: No address pulled');
  const [website, setWebsite] = useState('Error: No website pulled');
  const [googleMap, setGoogleMap] = useState('Error: No website pulled'); // doing the hard way because the normal google maps api cost money

  useEffect(() => {
    const database = firebase.database().ref("community/Texas");
    // const post = database.child().orderByKey();
            database.on('value', snap => {
              setName(snap.child("0").child("name").val())
              setPhone(snap.child("0").child("phone").val())
              setAddress(snap.child("0").child("address").val())
              setWebsite(snap.child("0").child("website").val())
              setGoogleMap(snap.child("0").child("googleMap").val())
        }); 
    
  },[phone])



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
                  <Dropdown.Item eventKey="1" active>Dallas</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Los Angeles</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Washington D.C</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Bing Bong</Dropdown.Item>
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
              <th>Google Map</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                {/* <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1429841093804!2d-96.90088378481364!3d32.947234180921015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c26479a675835%3A0x62ceba99e3d9f122!2s1618%20Kirby%20Rd%2C%20Carrollton%2C%20TX%2075006!5e0!3m2!1sen!2sus!4v1600039910371!5m2!1sen!2sus" 
                  width="100%" 
                  height="200%" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  aria-hidden="false" 
                  tabIndex="0"
                  title="comthing"
                  >
                </iframe> */}
                <div dangerouslySetInnerHTML={{ __html:googleMap}}></div>
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
                {/* 972-245-1573 */}
                <p><strong>Phone Number:</strong> {phone} </p>
                {/* 1618 Kirby Rd */}
                <p><strong>Address:</strong> {address} </p>
                {/* https://carrolltonhealth.com */}
                <p><strong>Website:</strong> {website} </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </CommunityContainer>
    </div>
  );
}

export default CommunityComponent;

// Opening Drop down
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
      console.log("opened drop down")
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// Custom Menu
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
        {/* filter */}
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        {/* listing city based on */}
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
