/// summary
///   Component of Admin_CommunityResources.js
///      Used to add a new facility to firebase
/// summary

import React, {useState} from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/admin.css'


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

// Used with state dropdown and forces the admin to only pick from this list.
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




function AdminAddCommunity() {
   // Initialize the first State the user will see and eventually allow them to select their own State to see facility 
   const [selectedState, setSelectedState] = useState('Texas');

   // Language can only be 'EN' 'KO' 'ZH' and is updated via eventhandler one line below
   
   // use with id='lang-buttons' to select the correct language on the website


   // Pulls all existing U.S States on firebase creates a dropdown list to select from
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
            

            <Form className="admin-form">

               {/* Form for Name */}
               

               {/* Drop down to pick a State form */}
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

               {/* Form for city */}
               <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="name" id="city"  />
               </Form.Group>

              {/* Form for google map */}
              <Form.Group>
                  <Form.Label>Google Map</Form.Label>
                  <Form.Control type="name" id="googleMap" />
               </Form.Group>

               {/* Form for langauge */}
               <div className="language-button-group">
               <Form.Group>
               <Form.Label>Language</Form.Label>
               <Form.Check
                  type="switch"
                  label="All"
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

               

         

               {/* Button to submit the form - additional information: used with the add_button_pressed function defined in this file. */}
               <Button onClick={() => add_button_pressed()} variant="primary" type="" className="submit">Add</Button>
            </Form>
         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminAddCommunity;


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






// When called looks for specific IDs in the HTML and pulls the values to be sent to firebase
function add_button_pressed()
{ 
   if(
      document.getElementById("city").value &&
      document.getElementById("googleMap").value )
   {
      if(e)
      {
            var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;
            firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key+'/'+"ALL").set({
               googleMap: document.getElementById("googleMap").value,
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
         firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key+'/'+"CH").set({
            googleMap: document.getElementById("googleMap").value,
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
         firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key+'/'+"KO").set({
            googleMap: document.getElementById("googleMap").value,
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
   ${'' /* color: var(--mainBlack); */}
   margin: 0 auto;
}


 `;
 