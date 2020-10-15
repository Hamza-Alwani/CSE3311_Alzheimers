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
import '../../../css/admin.css'

function AdminDeleteCommunity() {

   // Data from firebase
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [website, setWebsite] = useState('');
   const [googleMap, setGoogleMap] = useState(''); // doing the hard way because the normal google maps api cost money

   const [stateList, setStateList] = useState([]); // list of all states in firebase
   const [cityList, setCityList] = useState([]); // list of all city based on state in firebase
   const [keyList, setKeyList] = useState([]); // list of all key based on state in firebase

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Pick a State');
   const [selectedCity, setSelectedCity] = useState('Pick a City');
   const [selectedKey, setSelectedKey] = useState('No Key Selected');

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
      
      rootRef.on('value', id => {
               id.forEach(function(lang){
                  setName(lang.child("name").val())
                  setPhone(lang.child("phone").val())
                  setAddress(lang.child("address").val())
                  setWebsite(lang.child("website").val())
                  setGoogleMap(lang.child("googleMap").val())
               })
      }); 

   }, [selectedKey])


  
  // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
  const DropdownStates = ({ nameList }) => {
   return (
     <Dropdown>
       <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
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
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedCity}</Dropdown.Toggle>
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
         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedKey}</Dropdown.Toggle>
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
      <div className="delete-information">
         <Form  className="location-general-info">
            <Form.Group>
               <Form.Label>Name: {name}</Form.Label>
            </Form.Group>
            <Form.Group>
               <Form.Label>Address: {address}</Form.Label>
            </Form.Group>
            <Form.Group>
               <Form.Label>Google Map: {googleMap}</Form.Label>
            </Form.Group>
            <Form.Group>
               <Form.Label>Phone: {phone}</Form.Label>
            </Form.Group>
            <Form.Group>
               <Form.Label>Website: {website}</Form.Label>
            </Form.Group>
            <Button onClick={() => delete_place(selectedState, selectedCity, selectedKey)} variant="danger" type="submit" className="submit">Delete Information</Button>
         </Form>

         <div className="too-much-power">
            <Form  className="location-city">
               <Form.Group className="city-label">
                  <Form.Label>City: {selectedCity}</Form.Label>
               </Form.Group>
               <Button onClick={() => delete_city(selectedState, selectedCity)} variant="danger" type="submit" className="delete-power">Delete City</Button>
            </Form>


            <Form  className="location-state">
               <Form.Group className="state-label">
                  <Form.Label>State: {selectedState}</Form.Label>
               </Form.Group>
               <Button onClick={() => delete_state(selectedState)} variant="danger" type="submit" className="delete-power">Delete State</Button>
            </Form>
         </div>
      </div>
   );
 }

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">

         <div className="admin-form">
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
 export default AdminDeleteCommunity;


 

 const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
     <div id="state">{children}</div>
   </a>
 ));
 CustomToggle.propTypes = 
 {
   // children: Array,
   // onClick, I don't know what type this is 
 }
 CustomToggle.displayName="CustomDropdownToggle";
 



function delete_place(state, city, key){
   firebase.database().ref('community/'+state+'/'+city+'/'+key).remove().then(function(){
      window.alert("Message Deleted");
      // window.location.reload(false);
   }).catch(function(error){
      console.log(error);
   });
}



function delete_city(state, city){
   firebase.database().ref('community/'+state+'/'+city).remove().then(function(){
      window.alert("Deleted Selected City");
      // window.location.reload(false);
   }).catch(function(error){
      console.log(error);
   });
}

function delete_state(state){
   firebase.database().ref('community/'+state).remove().then(function(){
      window.alert("Deleted Selected State");
      // window.location.reload(false);
   }).catch(function(error){
      console.log(error);
   });
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.div`

/

/* Downdown */
.dropdown a
{
  color: var(--mainBlack);
  margin: 0 auto;
}

th
{
   width: 33.33%
}


.too-much-power
{
   margin-top: 10rem;
}



.city-label
{
   margin: 0;
}



.state-label
{
   margin: 0;
}

.delete-power
{
   margin-bottom: 1rem;
}

`;