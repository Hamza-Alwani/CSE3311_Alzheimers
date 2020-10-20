/// summary
///   Component of Admin_CommunityResources.js
///      Used to add a new facility to firebase
/// summary

import React, {useState} from 'react';
import styled from 'styled-components'

// bootstrap components
import  firebase from '../../../components/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

//css
import '../../../css/admin.css'

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
   const [selectedLang, setSelectedLang] = useState('EN');
   const handleChange = (val) => setSelectedLang(val); // use with id='lang-buttons' to select the correct language on the website


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
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" id="name"  />
               </Form.Group>

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

               {/* Form for address */}
               <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="name" id="address"  />
               </Form.Group>

               {/* Form for langauge */}
               <div className="language-button-group">
                  <Form.Group className="language-label">
                     <Form.Label>Language</Form.Label>
                  </Form.Group>
                  <ToggleButtonGroup  className="lang-buttons" id="lang-buttons" type="radio" name="lang-button-name" value={selectedLang} onChange={handleChange}>
                        <ToggleButton value={'KO'}>Korean</ToggleButton>
                        <ToggleButton value={'ZH'}>Chinese</ToggleButton>
                  </ToggleButtonGroup>
               </div>

               {/* Form for google map */}
               <Form.Group>
                  <Form.Label>Google Map</Form.Label>
                  <Form.Control type="name" id="googleMap" />
               </Form.Group>

               {/* Form for phone number */}
               <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="name" id="phone" />
               </Form.Group>

               {/* Form for website */}
               <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="name" id="website" />
               </Form.Group>

               {/* Button to submit the form - additional information: used with the add_button_pressed function defined in this file. */}
               <Button onClick={() => add_button_pressed(selectedLang)} variant="primary" type="" className="submit">Add</Button>
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
function add_button_pressed(selectedLang)
{ 
   if(document.getElementById("name").value && 
      document.getElementById("address").value &&
      document.getElementById("city").value &&
      document.getElementById("googleMap").value &&
      document.getElementById("phone").value &&
      document.getElementById("website").value )
   {
      var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;

      firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key+'/'+selectedLang).set({
         name:      document.getElementById("name").value,
         address:   document.getElementById("address").value,
         googleMap: document.getElementById("googleMap").value,
         phone:    document.getElementById("phone").value,
         website:   document.getElementById("website").value,
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
const StyleCommunityContainer = styled.nav`

/* Downdown */
.dropdown a
{
   ${'' /* color: var(--mainBlack); */}
   margin: 0 auto;
}


 `;
 