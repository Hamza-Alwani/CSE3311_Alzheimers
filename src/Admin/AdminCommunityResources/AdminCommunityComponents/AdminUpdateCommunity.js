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
import '../../../css/main.css'

   const lang = ['ALL','KO','ZH'];


function AdminUpdateCommunity() {

   // Data from firebase
   
   const [googleMap, setGoogleMap] = useState('Error: No website pulled');

   const [stateList, setStateList] = useState([]);
   const [cityList, setCityList] = useState([]);
   const [keyList, setKeyList] = useState([]);

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Texas');
   const [selectedCity, setSelectedCity] = useState('Dallas');
   const [selectedKey, setSelectedKey] = useState('nothign yet');
   // language can only be 'EN' 'KO' 'ZH'
   const [selectedLang, setSelectedLang] = useState('Pick a Language');

  // Pulls a list of all the U.S States in firebase upon loading up page
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
               setGoogleMap(snap.child(selectedCity).child("googleMap").val())
      }); 

      setKeyList([])
      setSelectedKey('Pick a specific location')
      // Sets the new key list when new city is selected
      rootRef.on('value', snap => {
            snap.forEach(function(id) {
               setKeyList(keyList => [...keyList, id.key]);

         });
      }); 

  }, [selectedState, selectedCity])

   // Pulls list of city once State is selected
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

   // Pulls infromation of the facility once Key is stated
   useEffect(() => {
      const database = firebase.database()
      const rootRef = database.ref("community/" + selectedState + '/' + selectedCity + '/' + selectedKey);
      
      rootRef.on('value', snap => {
         snap.forEach(function(lang){
            setSelectedLang(lang.key);
            setGoogleMap(lang.child("googleMap").val())

         })
      }); 
   // eslint-disable-next-line react-hooks/exhaustive-deps,
   }, [selectedKey])


  
   // Create a dropdown of all existing U.S. States in firebase
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

   // Create a dropdown of all existing Cities of U.S. State once U.S. State is selected
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

  // Create a dropdown of all existing facilities of the City once a City is selected 
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

   // Create a dropdown of possible languages the admin can update the facility to (Korean/Chinese)
   const DropdownLang = ({ nameList }) => {
      return (
            <Dropdown>
            <Dropdown.Toggle as={CustomKeyToggle} id="dropdown-custom-components" className="dropdown-button">{selectedLang}</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
               {nameList.map((lang, index) => (
                  <Dropdown.Item onClick={() => {setSelectedLang(lang)}} key={index}>{lang}</Dropdown.Item>
               ))}
            </Dropdown.Menu>
            </Dropdown>
      );
   }

   // Function: dynamically updates the forms once a key is selected.
   const UpdateForms = () => {
      return (
         <Form className="contact-us-form">

           

            {/* Form for Language */}
            <div className="language-button-group">
               <Form.Group className="language-label">
                  <Form.Label>Language</Form.Label>
               </Form.Group>
               <Table striped bordered hover className="state-city-dropdown-table">
                  <thead>
                     <tr>
                        <th>
                           <DropdownLang nameList={lang} />
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>

            {/* Form for Google Map */}
            <Form.Group>
               <Form.Label>Google Map</Form.Label>
               <Form.Control type="name" id="googleMap-update" defaultValue={googleMap}/>
            </Form.Group>

            

            {/* Button used to update the facility once all the fields are fill out */}
            <Button onClick={() => update_button(selectedKey,selectedLang)} variant="primary" type="submit" className="submit">Update</Button>
         </Form>
      );
   }

   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
         <div className="admin-form">
            <StyleCommunityContainer>
               <Table striped bordered hover className="state-city-dropdown-table">
                  <thead>
                     <tr>
                        <th>
                           {/* Dropdown of States  */}
                           <DropdownStates nameList={stateList} />
                        </th>
                        <th>
                           {/* Dropdown of Cities  */}
                           <DropdownCity nameList={cityList} />
                        </th>
                        <th>
                           {/* Dropdown of Keys  */}
                           <DropdownKey nameList={keyList} />
                        </th>
                     </tr>
                  </thead>
               </Table>

               {/* Important: Dynamically updates information with the UpdateForms function */}
               {<UpdateForms/>}

            </StyleCommunityContainer>
         </div>
      </div>
   );
 }
 export default AdminUpdateCommunity;

// Customize style of dropdowns for state, city, key
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
 


// Used with the buttom div to send the filled out form to firebase for update.
   function update_button(selectedKeyInput, selectedLang)
   { 
      if(document.getElementById("googleMap-update").value)
  
      {
         firebase.database().ref('community/'+document.getElementById("state-update").innerHTML+'/'+document.getElementById("city-update").innerHTML+'/'+selectedKeyInput).remove();
         firebase.database().ref('community/'+document.getElementById("state-update").innerHTML+'/'+document.getElementById("city-update").innerHTML+'/'+selectedKeyInput+'/'+selectedLang).set({
            googleMap: document.getElementById("googleMap-update").value,
            
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

/* Downdown */
.dropdown a
{
  ${'' /* color: var(--mainBlack); */}
  margin: 0 auto;
}

th
{
   width: 33.33%
}

`;