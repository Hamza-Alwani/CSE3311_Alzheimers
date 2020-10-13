/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../components/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/main.css'

   // maybe think of a better way of doing this
   const stateDropDownList = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
   ] 

function AdminUpdateCommunity() {

   // Data from firebase
   const [name, setName] = useState('Error: No title set');
   const [phone, setPhone] = useState('Error: No phone number pulled');
   const [address, setAddress] = useState('Error: No address pulled');
   const [website, setWebsite] = useState('Error: No website pulled');
   const [googleMap, setGoogleMap] = useState('Error: No website pulled'); // doing the hard way because the normal google maps api cost money

   const [stateList, setStateList] = useState([]); // list of all states in firebase
   const [cityList, setCityList] = useState([]); // list of all city based on state in firebase
   const [keyList, setKeyList] = useState([]); // list of all key based on state in firebase

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Texas');
   const [selectedCity, setSelectedCity] = useState('Dallas');
   const [selectedKey, setSelectedKey] = useState('nothign yet');

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

  // Pulls the requested data once state/city are selected
   useEffect(() => {
      const database = firebase.database()
      const rootRef = database.ref("community/" + selectedState + '/' + selectedCity);
      
      rootRef.on('value', snap => {
                  // new way of pulling
                  // setName(snap.child(selectedCity).child(key).child("name").val())
               setName(snap.child(selectedCity).child("name").val())
               setPhone(snap.child(selectedCity).child("phone").val())
               setAddress(snap.child(selectedCity).child("address").val())
               setWebsite(snap.child(selectedCity).child("website").val())
               setGoogleMap(snap.child(selectedCity).child("googleMap").val())
      }); 

      // sets the new key list when new city is selected
      setKeyList([])
      setSelectedKey('Pick a specific location')
      rootRef.on('value', snap => {
            snap.forEach(function(childSnapshot) {
               setKeyList(keyList => [...keyList, childSnapshot.key]);
         });
      }); 

  }, [selectedState, selectedCity])

   // Pulls list of city for the specific state for the dropdown 
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

   // Pulls the requested data of the specific key
   useEffect(() => {
      const database = firebase.database()
      const rootRef = database.ref("community/" + selectedState + '/' + selectedCity + '/' + selectedKey);
      
      rootRef.on('value', snap => {
               setName(snap.child("name").val())
               setPhone(snap.child("phone").val())
               setAddress(snap.child("address").val())
               setWebsite(snap.child("website").val())
               setGoogleMap(snap.child("googleMap").val())
      }); 

   }, [selectedKey])


  
  // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
  const DropdownStates = ({ nameList }) => {
   return (
     <Dropdown>
       <Dropdown.Toggle as={CustomStateToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
       <Dropdown.Menu className="dropdown-menu">
         {nameList.map((state, index) => (
           <Dropdown.Item onClick={() => {setSelectedState(state); 
                  firebase.database().ref("community/"+state).orderByKey().limitToFirst(1).on('value', 
                     function(snap) { 
                        for(var key in snap.val())
                        {
                           setSelectedCity(key)
                        } 
                     }); 
                  } }  key={index}>{state}</Dropdown.Item>
         ))}
       </Dropdown.Menu>
     </Dropdown>
   );
 };

  // Pulls all the city of the state
  const DropdownCity = ({ nameList }) => {
    return (
        <Dropdown>
          <Dropdown.Toggle as={CustomCityToggle} id="dropdown-custom-components" className="dropdown-button">{selectedCity}</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            {nameList.map((city, index) => (
              <Dropdown.Item onClick={() => setSelectedCity(city)} key={index}>{city}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
    );
  }

  // Pulls all the key of the state
  const DropdownKey = ({ nameList }) => {
   return (
       <Dropdown>
         <Dropdown.Toggle as={CustomKeyToggle} id="dropdown-custom-components" className="dropdown-button">{selectedKey}</Dropdown.Toggle>
         <Dropdown.Menu className="dropdown-menu">
           {nameList.map((key, index) => (
             <Dropdown.Item onClick={() => {setSelectedKey(key)}} key={index}>{key}</Dropdown.Item>
           ))}
         </Dropdown.Menu>
       </Dropdown>
   );
 }

 const UpdateForms = () => {
   return (
      <Form className="contact-us-form">
         <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" id="name-update"  defaultValue={name} />
         </Form.Group>
         <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="name" id="address-update" defaultValue={address} />
         </Form.Group>
         <Form.Group>
            <Form.Label>Google Map</Form.Label>
            <Form.Control type="name" id="googleMap-update" defaultValue={googleMap}/>
         </Form.Group>
         <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="name" id="phone-update" defaultValue={phone}/>
         </Form.Group>
         <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control type="name" id="website-update" defaultValue={website}/>
         </Form.Group>
         <Button onClick={() => update_button(selectedKey)} variant="primary" type="submit" className="submit">Update</Button>
      </Form>
   );
 }

   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="PLACEHOLDER-CLASSNAME">

         <div className="form-div">
            <StyleCommunityContainer>
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
                        <th>
                           <DropdownKey nameList={keyList} />
                        </th>
                     </tr>
                  </thead>
               </Table>

               {<UpdateForms/>}
            </StyleCommunityContainer>
         </div>
      </div>
   );
 }
 export default AdminUpdateCommunity;

 const CustomStateToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
     <div id="state-update">{children}</div>
   </a>
 ));
 CustomStateToggle.propTypes = 
 {
   // children: Array,
   // onClick, I don't know what type this is 
 }
 CustomStateToggle.displayName="CustomDropdownToggle";

 const CustomCityToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
     <div id="city-update">{children}</div>
   </a>
 ));
 CustomCityToggle.propTypes = 
 {
   // children: Array,
   // onClick, I don't know what type this is 
 }
 CustomCityToggle.displayName="CustomDropdownToggle";

 const CustomKeyToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
     <div id="key-update">{children}</div>
   </a>
 ));
 CustomKeyToggle.propTypes = 
 {
   // children: Array,
   // onClick, I don't know what type this is 
 }
 CustomKeyToggle.displayName="CustomDropdownToggle";
 



 function update_button(selectedKeyInput)
 { 
    if(document.getElementById("name-update").value && 
       document.getElementById("address-update").value &&
       document.getElementById("googleMap-update").value &&
       document.getElementById("phone-update").value &&
       document.getElementById("website-update").value )
    {
 
       firebase.database().ref('community/'+document.getElementById("state-update").innerHTML+'/'+document.getElementById("city-update").innerHTML+'/'+selectedKeyInput).set({
          name:      document.getElementById("name-update").value,
          address:   document.getElementById("address-update").value,
          googleMap: document.getElementById("googleMap-update").value,
          phone:     document.getElementById("phone-update").value,
          website:   document.getElementById("website-update").value,
       },function(error){
          if(error)
          {
             window.alert("failed");
          }
          else
          {
             window.alert("yes");
             window.location.reload(false);
          }
       });
    }
    else
    {
       window.alert("Failed. Make sure all fields are full");
    }
 }

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.div`
 

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

`;