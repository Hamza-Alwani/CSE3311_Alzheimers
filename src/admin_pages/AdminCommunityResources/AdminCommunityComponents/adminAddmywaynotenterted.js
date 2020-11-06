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
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

//css
import '../../../css/admin.css'

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

 var e=false;
 var c=false;
 var k=false;
 
 function change_e()
 {
    e=!e
 }
 function change_c()
 {
    c=!c
 }
 function change_k()
 {
    k=!k
 }


function AdminAddCommunity() {
   // Data selected by user
   const [selectedState, setSelectedState] = useState('Texas');

   // language can only be 'EN' 'KO' 'ZH'
   // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
   const DropdownStates = ({ nameList }) => {
     return (
       <Dropdown>
         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
         <Dropdown.Menu className="dropdown-menu">
           {nameList.map((state, index) => (
             <Dropdown.Item  onClick={() => {setSelectedState(state)}} key={index}>{state}</Dropdown.Item>
           ))}
         </Dropdown.Menu>
       </Dropdown>
     );
   };
   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
         <StyleCommunityContainer>
            {/* Drop down to pick citys */}
            <Form className="admin-form">
               
      
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" id="name"  />
               </Form.Group>
               <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Table striped bordered hover className="state-dropdown-table">
                     <thead>
                        <tr>
                           <th>
                              <DropdownStates nameList={stateDropDownList} />
                           </th>
                        </tr>
                     </thead>
                  </Table>
               </Form.Group>
               <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="name" id="city"  />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="name" id="address"  />
               </Form.Group>
               <div className="language-button-group">
                  <Form.Group className="language-label">
                     <Form.Label>Language</Form.Label>
                     <Form.Check
                        type="switch"
                        label="English"
                        name="formHorizontalRadios"
                        id="en"
                        onChange={change_e}
                     />
                     <Form.Check
                        type="switch"
                        label="Chinese"
                        name="formHorizontalRadios"
                        id="ch"
                        onChange={change_c}
                     />
                     <Form.Check
                        type="switch"
                        label="Korean"
                        name="formHorizontalRadios"
                        id="ko"
                        onChange={change_k}
                     />
                  </Form.Group>
               </div>
               <Form.Group>
                  <Form.Label>Google Map</Form.Label>
                  <Form.Control type="name" id="googleMap" />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="name" id="phone" />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="name" id="website" />
               </Form.Group>
               <Button onClick={() => add_button_pressed()} variant="primary" type="" className="submit">Add</Button>
            </Form>
         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddCommunity;


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
      <div id="state">{children}</div>
   </a>
   ));
CustomToggle.propTypes = 
{
   // fixing prop type erros but idk how too yet 
   // children: Array,
   // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";







function add_button_pressed()
{ 
   if(document.getElementById("name").value && 
      document.getElementById("address").value &&
      document.getElementById("city").value &&
      document.getElementById("googleMap").value &&
      document.getElementById("phone").value &&
      document.getElementById("website").value)
   {
     

      if(e)
      {
         var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;
         firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key).set({
            name:      document.getElementById("name").value,
            address:   document.getElementById("address").value,
            googleMap: document.getElementById("googleMap").value,
            phone:    document.getElementById("phone").value,
            website:   document.getElementById("website").value,
            language: "en"
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
      if(c)
      {
         var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;
         firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key).set({
            name:      document.getElementById("name").value,
            address:   document.getElementById("address").value,
            googleMap: document.getElementById("googleMap").value,
            phone:    document.getElementById("phone").value,
            website:   document.getElementById("website").value,
            language: "ch",
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
      if(k)
      {
         var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;
         firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key).set({
            name:      document.getElementById("name").value,
            address:   document.getElementById("address").value,
            googleMap: document.getElementById("googleMap").value,
            phone:    document.getElementById("phone").value,
            website:   document.getElementById("website").value,
            language: "ko",
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
      if( !c && !k && !e)
       {
      window.alert("failed. Make sure all fields are full");
      }
   }
   else
   {
      window.alert("Failed. Make sure all fields are full");
   }
}


// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`

/* Downdown */
.dropdown a
{
   color: var(--mainBlack);
   margin: 0 auto;
}


 `;
 
 
 