/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/admin.css'

function AdminDeleteCommunity() {

   // Data from firebase
   const [googleMap, setGoogleMap] = useState('');

   const [stateList, setStateList] = useState([]);
   const [cityList, setCityList] = useState([]);
   const [keyList, setKeyList] = useState([]);

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Pick a State');
   const [selectedCity, setSelectedCity] = useState('Pick a City');
   const [selectedKey, setSelectedKey] = useState('No Key Selected');

  // Pulls a list of all the U.S States that exist in firebase
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community");
    
    rootRef.on('value', snap => {
              snap.forEach(function(childSnapshot) {
                setStateList(stateList => [...stateList, childSnapshot.key]);
            });
          });
  }, [])

  // Pulls a list of IDs once State/City are selected
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

   // Pulls list of city for the dropdown once the specific State is selected 
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

   // Pulls the ID's informtion once ID is selected
   useEffect(() => {
      const database = firebase.database()
      const rootRef = database.ref("community/" + selectedState + '/' + selectedCity + '/' + selectedKey);
      
      rootRef.on('value', id => {
               id.forEach(function(lang){
                  setGoogleMap(lang.child("googleMap").val())
               })
      }); 
   // oldESlint-dis removed
   }, [selectedKey])

  
  // Creates a dropdown of all the States upon loading up the page
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

  // Creates a dropdown of all the cities of the selected state
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

  // Creates a dropdown of all the key of the selected city
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
            {/* Form for Name */}
           

            {/* Form for Google Map */}
            <Form.Group>
               <Form.Label>Google Map: {googleMap}</Form.Label>
            </Form.Group>

            

            {/* Button used to delete the selected ID once state, city, key are selected */}
            <Button onClick={() => delete_place(selectedState, selectedCity, selectedKey)} variant="danger" type="submit" className="submit">Delete Information</Button>
         </Form>


         {/* Seperate form for destructive actions
               - Deleting entire City subtree
               - Deleting entire State subtree
          */}
         <div className="delete-city-state-section">
            <Form  className="location-city">
               <Form.Group className="city-label">
                  <Form.Label>City: {selectedCity}</Form.Label>
               </Form.Group>
               <Button onClick={() => delete_city(selectedState, selectedCity)} variant="danger" type="submit" className="delete-button">Delete City</Button>
            </Form>


            <Form  className="location-state">
               <Form.Group className="state-label">
                  <Form.Label>State: {selectedState}</Form.Label>
               </Form.Group>
               <Button onClick={() => delete_state(selectedState)} variant="danger" type="submit" className="delete-button">Delete State</Button>
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


 

// Customize how the dropdown menu looks
//    Additonal Information
//       - Defines propType so information passed in is double checked before used.
//       - React requires a displayName to tell components apart
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
      <div id="state">{children}</div>
   </a>
));
CustomToggle.propTypes = 
{
   // Need correct propType below - warning currently unknown how to solve.
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

.delete-city-state-section
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

.delete-button
{
   margin-bottom: 1rem;
}

`;