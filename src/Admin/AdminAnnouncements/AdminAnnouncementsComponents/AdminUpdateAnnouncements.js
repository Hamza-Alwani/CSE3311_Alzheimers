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

     // On loading up the website - fill titleList and objectList with existing announcementss from firebase
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
    // oldESlint-dis removed
    }, [announcementsKey])


    useEffect(() => {
        setObject(announcements);
    }, [announcements])

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


    const SetFrame = ({obj}) => 
    {
        
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    
                    <img  width='30%'src={announcements.pic}/>
                    

                    {/* Form for Website URL */}
                    <Form.Group>
                        <Form.Label>Website </Form.Label>
                        <Form.Control type="name" id="announcements-website-update" defaultValue={announcements.website} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>language</Form.Label>
                        <Form.Control type="name" id="announcements-language-update" defaultValue={announcements.language} />
                    </Form.Group>
                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => update_announcements_button(announcementsKey)} variant="primary" type="submit" className="submit">Update</Button>
                </Form>
            );
       
    }
 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
    return (
        <div className="admin-community">
    
            <StyleCommunityContainer>
                    {/* Dropdown for list of Title of Articles */}
                    <Table striped bordered hover className="state-city-dropdown-table">
                            <thead>
                                <tr>
                                    <th>
                                        <DropdownCity nameList={titleList}/>
                                    </th>
                                </tr>
                            </thead>
                    </Table>
                    
                    {/* After the announcements/video is select, create the form to edit */}
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


// Used with the announcements update section
function update_announcements_button(announcementsKey){ 

    if( document.getElementById("announcements-language-update").value && 
        document.getElementById("announcements-website-update").value)
    {
        firebase.database().ref('Announcements/'+announcementsKey).set({
            title:      document.getElementById("announcements-title-update").value,
            disc:       document.getElementById("announcements-description-update").value,
            pic:        document.getElementById("announcements-pic-update").value,
            website:    document.getElementById("announcements-website-update").value,
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

// Used with the video update section



// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 