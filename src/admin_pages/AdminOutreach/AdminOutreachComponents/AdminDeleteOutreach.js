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


function AdminDeleteDementia() {

    // List of outreach by name
    const [titleList, setTitleList] = useState([]);

    // List of keys to pick from later 
    const [outreachList, setOutreachList] = useState([]);

    // Specific key to locate outreach information in firebase
    const [outreachKey, setOutreachKey] = useState('');

    // Outreach object after key is select and information is pulled from firebase
    const [outreach, setOutreach] = useState(
        {
            type: "",
            disc: "",
            pic: "",
            title: "",
            website: "",
            language: ""
        });

    
    // Set which object (outreach or video) to display
    const [object, setObject] = useState(outreach);

     // Onload fill titleList and outreachList
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setOutreachList(outreachList => [...outreachList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("title").val()]);
                });
            });
    }, [])

    // Once the Key of the outreach is selected, fill the fields with values from that outreach
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach");
        // console.log("called")
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    // console.log("The key was: " + childSnapshot.key)
                    // console.log("The outreach key was: " + outreachKey)
                    if(childSnapshot.key === outreachKey)
                    {
                        if(childSnapshot.child("type").val() == "outreach")
                        {
                            setOutreach({...outreach, 
                                type: childSnapshot.child("type").val(),
                                disc: childSnapshot.child("disc").val(),
                                pic: childSnapshot.child("pic").val(),
                                title: childSnapshot.child("title").val(),
                                website: childSnapshot.child("website").val(),
                                language: childSnapshot.child("language").val()
                            })
                        }
                    }
                });
            });
    }, [outreachKey])

    // If the object outreach is changed, update the information to the select outreach 
    useEffect(() => {
        setObject(outreach);
    }, [outreach])

    // Pulls all the outreach titles
    const DropdownCity = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an outreach</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => { setOutreachKey(outreachList[index])}} key={index}>{title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    const SetDeleteComponent = ({obj}) => 
    {
        if(obj.type == "outreach")
        {
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name: {obj.title}</Form.Label>
                    </Form.Group>

                    {/* Form for Description */}
                    <Form.Group>
                        <Form.Label>Description: {obj.disc}</Form.Label>
                    </Form.Group>

                    {/* Form for Picture URL */}
                    <Form.Group>
                        <Form.Label>Picture URL: {obj.pic}</Form.Label>
                    </Form.Group>

                    {/* Form for Website URL */}
                    <Form.Group>
                        <Form.Label>Website URL: {obj.website}</Form.Label>
                    </Form.Group>
                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => delete_button(outreachKey)} variant="danger" type="submit" className="submit">Delete</Button>
                </Form>
            );
        }
        return null
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
 export default AdminDeleteDementia;

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

function delete_button(outreachKey){ 
        firebase.database().ref('Outreach/'+outreachKey).remove();
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 