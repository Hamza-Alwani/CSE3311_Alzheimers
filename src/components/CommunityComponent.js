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
function dropdownItem(props)
{


}


function CommunityComponent() {

  // Data from firebase
  const [name, setName] = useState('Error: No title set');
  const [phone, setPhone] = useState('Error: No phone number pulled');
  const [address, setAddress] = useState('Error: No address pulled');
  const [website, setWebsite] = useState('Error: No website pulled');
  const [googleMap, setGoogleMap] = useState('Error: No website pulled'); // doing the hard way because the normal google maps api cost money
  const [stateList, setStateList] = useState([]); // list of all states in firebase
  // Data selected by user
  const [selectedState, setSelectedState] = useState('Pick your state');
  // const [city, setCity] = useState('Error: No city selected');


  const DropdownItems = ({ nameList }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
  
        <Dropdown.Menu className="dropdown-menu">
          {nameList.map((name, index) => (
            <Dropdown.Item href={`#/action-${index}`} key={index}>{name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  // Pulls and compiles a list of all the states in firebase - works
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community");
    
    rootRef.on('value', snap => {
              snap.forEach(function(childSnapshot) {
                // alert(childSnapshot.key);
                setStateList(stateList => [...stateList, childSnapshot.key]);
            });
          });
    
    console.log(stateList) // empty for some reason
  }, [])


  // Pulls the requested data of the state/city
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community/Texas");
    
    rootRef.on('value', snap => {
              setName(snap.child("0").child("name").val())
              setPhone(snap.child("0").child("phone").val())
              setAddress(snap.child("0").child("address").val())
              setWebsite(snap.child("0").child("website").val())
              setGoogleMap(snap.child("0").child("googleMap").val())
    }); 
    
  }, [])


///////////////////////////////////////////////////////////////////////////////////////
  
  // HTML
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
              <DropdownItems nameList={stateList} />
            </th>
          </tr>
        </thead>
      </Table>

      {/* Information about the city */}
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
                {/* yolo */}
                <div dangerouslySetInnerHTML={{ __html:googleMap}}></div>
              </td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{name}</th>
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
