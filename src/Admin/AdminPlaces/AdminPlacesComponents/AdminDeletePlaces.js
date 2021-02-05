/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'

//css
import '../../../css/admin.css'


function AdminDeletePlaces() {

    // List of places by name
    const [titleList, setTitleList] = useState([]);

    // List of keys to pick from later 
    const [placesList, setPlacesList] = useState([]);

    // Specific key to locate places information in firebase
    const [placesKey, setPlacesKey] = useState('');

    // Places object after key is select and information is pulled from firebase
    const [places, setPlaces] = useState(
        {
            name:"",
            address:"",
            website:"",
            phone:"",
            map:"",
        });

    
    // Set which object (places or video) to display
    const [object, setObject] = useState(places);

     // Onload fill titleList and placesList
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Places/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setPlacesList(placesList => [...placesList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("name").val()]);
                });
            });
    }, [])

    // Once the Key of the places is selected, fill the fields with values from that places
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Places");
        // console.log("called")
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    // console.log("The key was: " + childSnapshot.key)
                    // console.log("The places key was: " + placesKey)
                    if(childSnapshot.key === placesKey)
                    {
                            setPlaces({...places, 
                                name:childSnapshot.child("name").val(),
                                address:childSnapshot.child("address").val(),
                                website:childSnapshot.child("website").val(),
                                phone:childSnapshot.child("phone").val(),
                                map:childSnapshot.child("map").val(),
                                
                            })
                        
                    }
                });
            });
    // oldESlint-dis removed
    }, [placesKey])

    // If the object places is changed, update the information to the select places 
    useEffect(() => {
        setObject(places);
    }, [places])

    // Pulls all the places titles
    const DropdownCity = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an places</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => { setPlacesKey(placesList[index])}} key={index}>{title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const SetDeleteComponent = ({obj}) => 
    {
        
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    {/* Form for Picture URL */}
                    
                    <Form.Group>
                        <Form.Label>Name: {obj.name}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address: {obj.address}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Website URL: {obj.website}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number: {obj.phone}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Map Link: {obj.map}</Form.Label>
                    </Form.Group>
                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => delete_button(placesKey)} variant="danger" className="submit">Delete</Button>
                </Form>
            );
        

    }

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="admin-community">
 
         <StyleCommunityContainer>
            
                {/* Drop down to pick citys */}
                    
                    <Table striped bordered hover className="state-city-dropdown-table">
                        <thead>
                            <tr>
                                <th>
                                    <DropdownCity nameList={titleList}/>
                                </th>
                            </tr>
                        </thead>
                    </Table>

                    <SetDeleteComponent obj={object}></SetDeleteComponent>


         </StyleCommunityContainer>
      </div>
   );
 }
 export default AdminDeletePlaces;

// Customize style of dropdowns
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
      <div id="title">{children}</div>
   </a>
   ));
CustomToggle.propTypes = 
{
   // fixing prop type erros but idk how too yet 
   // children: Array,
   // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";

function delete_button(placesKey){ 

        firebase.database().ref('Places/'+placesKey).remove();
        window.location.reload();
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 