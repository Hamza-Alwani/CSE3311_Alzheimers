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


function AdminDeleteAnnouncements() {

    // List of announcements by name
    const [titleList, setTitleList] = useState([]);

    // List of keys to pick from later 
    const [announcementsList, setAnnouncementsList] = useState([]);

    // Specific key to locate announcements information in firebase
    const [announcementsKey, setAnnouncementsKey] = useState('');

    // Announcements object after key is select and information is pulled from firebase
    const [announcements, setAnnouncements] = useState(
        {
            pic: "",
            website: "",
            language: ""
        });

    
    // Set which object (announcements or video) to display
    const [object, setObject] = useState(announcements);

     // Onload fill titleList and announcementsList
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Announcements/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setAnnouncementsList(announcementsList => [...announcementsList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("pic").val()]);
                });
            });
    }, [])

    // Once the Key of the announcements is selected, fill the fields with values from that announcements
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Announcements");
        // console.log("called")
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    // console.log("The key was: " + childSnapshot.key)
                    // console.log("The announcements key was: " + announcementsKey)
                    if(childSnapshot.key === announcementsKey)
                    {
                            setAnnouncements({...announcements, 
                                pic: childSnapshot.child("pic").val(),
                                website: childSnapshot.child("website").val(),
                                language: childSnapshot.child("language").val()
                            })
                        
                    }
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [announcementsKey])

    // If the object announcements is changed, update the information to the select announcements 
    useEffect(() => {
        setObject(announcements);
    }, [announcements])

    // Pulls all the announcements titles
    const DropdownCity = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an announcements</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => { setAnnouncementsKey(announcementsList[index])}} key={index}>{title}</Dropdown.Item>
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
                        <Form.Label>Picture URL: {obj.pic}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>language: {obj.language}</Form.Label>
                    </Form.Group>
                    <img  width='30%' src={obj.pic}/>

                    {/* Form for Website URL */}
                    <Form.Group>
                        <Form.Label>Website URL: {obj.website}</Form.Label>
                    </Form.Group>
                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => delete_button(announcementsKey,obj.pic)} variant="danger" className="submit">Delete</Button>
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
 export default AdminDeleteAnnouncements;

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

function delete_button(announcementsKey, pic){ 

   {/* var httpsReference = firebase.storage().refFromURL(pic)




    httpsReference.delete().then(function() {
        window.alert("woooo!! :)")
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        window.alert("noooo :(")
      });

    */}
        firebase.database().ref('Announcements/'+announcementsKey).remove();
        window.location.reload();
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 