/// summary
///
/// The component should be able to be inserted into the community page
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



function CommunityComponent() {

  // Data from firebase
  const [name, setName] = useState('Error: No title set');
  const [phone, setPhone] = useState('Error: No phone number pulled');
  const [address, setAddress] = useState('Error: No address pulled');
  const [website, setWebsite] = useState('Error: No website pulled');
  const [googleMap, setGoogleMap] = useState('Error: No website pulled'); // doing the hard way because the normal google maps api cost money
  const [stateList, setStateList] = useState([]); // list of all states in firebase
  const [cityList, setCityList] = useState([]); // list of all city based on state in firebase
  // Data selected by user
  const [selectedState, setSelectedState] = useState('Texas');
  const [selectedCity, setSelectedCity] = useState('Dallas');

  // Pulls a list of all the U.S States in firebase - works
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community");
    
    rootRef.on('value', snap => {
              snap.forEach(function(childSnapshot) {
                setStateList(stateList => [...stateList, childSnapshot.key]);
            });
          });
  }, [])

  // Pulls the requested data once state/city are seleceted
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community/" + selectedState );
    
    rootRef.on('value', snap => {
              setName(snap.child(selectedCity).child("name").val())
              setPhone(snap.child(selectedCity).child("phone").val())
              setAddress(snap.child(selectedCity).child("address").val())
              setWebsite(snap.child(selectedCity).child("website").val())
              setGoogleMap(snap.child(selectedCity).child("googleMap").val())
    }); 
  }, [selectedState, selectedCity])

  // Pulls the requested data once state/city are seleceted
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community/" + selectedState );
    setCityList([])
    rootRef.on('value', snap => {
              snap.forEach(function(childSnapshot) {
                setCityList(cityList => [...cityList, childSnapshot.key]);
            });
          });
  }, [selectedState])

  // Pulls all the city of the state
  const DropdownCity = ({ nameList }) => {
    return (
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedCity}</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            {nameList.map((city, index) => (
              <Dropdown.Item onClick={() => setSelectedCity(city)} key={index}>{city}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
    );

  }

  // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
  const DropdownStates = ({ nameList }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {nameList.map((state, index) => (
            <Dropdown.Item onClick={() => {setSelectedState(state); firebase.database().ref("community/"+state).orderByKey().limitToFirst(1).on('value', function(snap) { for(var key in snap.val()){setSelectedCity(key)} }); } }  key={index}>{state}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

///////////////////////////////////////////////////////////////////////////////////////
  
  // HTML
  return (
    <div className="main-component">

      {/* Header */}
      <div className="gen_header">
               Community Resources
      </div>

      <CommunityContainer>
        {/* Drop down to pick citys */}
        <Table striped bordered hover className="state-city-dropdown-table">
          <thead>
            <tr>
            
              <th>
                <DropdownStates nameList={stateList} />
              </th>
              <th>
                <DropdownCity nameList={cityList} />
              </th>
            </tr>
          </thead>
        </Table>

        {/* Information about the city */}
        <Table striped bordered hover className="google-map-table">
          <thead>
            <tr>
              <th>Google Map</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                {/* yolo */}
                <div className="iframe-google-map" dangerouslySetInnerHTML={{ __html:googleMap}}></div>
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
                <p><strong>Phone Number:</strong> {phone} </p>
                <p><strong>Address:</strong> {address} </p>
                <p><strong>Website:</strong> <a href={website}>{website}</a></p>
              </td>
            </tr>
          </tbody>
        </Table>
      </CommunityContainer>
    </div>
  );
}

export default CommunityComponent;

// Opening Drop down: CSS of dropdown
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
CustomToggle.propTypes = 
{
  children: String,
  // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";

// 'style-component package used for infile css'
const CommunityContainer = styled.div`

/* Maybe we're use it - centers the table and makes the drop down smaller */
/* .state-city-dropdown-table
{
  width: 25%;
  margin: 0 auto;
  margin-bottom: 1rem;
} */

/* General */
.community-div
{
  flex: 1;
}

/* Downdown */
.dropdown a
{
  color: var(--mainBlack);
  margin: 0 auto;
}

/* Table */
.google-map-table
{
  height:30rem;
}

th
{
  width: 50%;
}

.iframe-google-map
{
  height:100%;
}

iframe
{
  height:100%;
  width:100%;
}
/* End Table */

@media only screen and (max-width: 600px) {
  .state-city-dropdown-table
  {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .google-map-table
  {
    height: 100%;
  }
}

`;
