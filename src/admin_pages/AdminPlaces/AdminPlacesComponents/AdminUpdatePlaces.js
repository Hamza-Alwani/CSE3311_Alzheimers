/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'

//css
import '../../../css/admin.css'


function AdminUpdateAnnouncements() {

    // List of places/video by name
    const [titleList, setTitleList] = useState([]);

    // List of keys to pick from later 
    const [placesKey, setPlacesKey] = useState('');

    // Specific key to locate places/video in firebase
    const [objectList, setObjectList] = useState([]);

    // Places/Video objects after key is select and information is pulled from firebase
    const [places, setPlaces] = useState(
        {
            name:"",
            address:"",
            website:"",
            phone:"",
        });

    
    const [object, setObject] = useState(places);

     // On loading up the website - fill titleList and objectList with existing placess from firebase
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Places/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setObjectList(objectList => [...objectList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("name").val()]);
                });
            });
    }, [])

    

    // Once the Key of the places is selected, fill the fields with values from that places
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Places");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    if(childSnapshot.key === placesKey)
                    {
                            setPlaces({...places, 
                                name:childSnapshot.child("name").val(),
                                address:childSnapshot.child("address").val(),
                                website:childSnapshot.child("website").val(),
                                phone:childSnapshot.child("phone").val(),
                            })
                        
                    }
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [placesKey])

    // Once the places or video object is finished being created, set the object to be used

    useEffect(() => {
        setObject(places);
    }, [places])

    // Creates a dropdown of places titles 
    const DropdownTitle = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an places</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => { setPlacesKey(objectList[index]); /*console.log(objectList[index]);*/ }} key={index}>{title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }


    const SetFrame = ({obj}) => 
    {

            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" id="places-name-update"  defaultValue={places.name} />
                    </Form.Group>
                    {/* Form for Description */}
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="name" id="places-address-update" defaultValue={places.address}  />
                    </Form.Group>

                    {/* Form for Picture URL */}
   
                    {/* Form for Website URL */}
                    <Form.Group>
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control type="name" id="places-website-update" defaultValue={places.website} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="name" id="places-phone_number-update" defaultValue={places.phone}  />
                    </Form.Group>

                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => update_places_button(placesKey)} variant="primary" type="submit" className="submit">Update</Button>
                </Form>
            );
        
        
    }
 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
    return (
        <div className="admin-community">
    
            <StyleCommunityContainer>
                    {/* Dropdown for list of Title of Placess */}
                    <Table striped bordered hover className="state-city-dropdown-table">
                            <thead>
                                <tr>
                                    <th>
                                        <DropdownTitle nameList={titleList}/>
                                    </th>
                                </tr>
                            </thead>
                    </Table>
                    
                    {/* After the places/video is select, create the form to edit */}
                    <SetFrame key={object }obj={object}> </SetFrame>

            </StyleCommunityContainer>
        </div>
    );
}
export default AdminUpdateAnnouncements;

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


// Used with the places update section
function update_places_button(placesKey){ 

    if( document.getElementById("places-name-update").value && 
        document.getElementById("places-address-update").value &&
        document.getElementById("places-phone_number-update").value &&
        document.getElementById("places-website-update").value)
    {
        firebase.database().ref('Places/'+placesKey).set({
            name:       document.getElementById("places-name-update").value,
            address:    document.getElementById("places-address-update").value,
            website:    document.getElementById("places-website-update").value,
            phone:      document.getElementById("places-phone_number-update").value,
        },function(error){
            if(error){
            window.alert("failed");
            }else{
            window.alert("yes");
            window.location.reload(false);
            }
        });
    }
    else
    {
        window.alert("failed. Make sure all fields are full");
    }

}




// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 