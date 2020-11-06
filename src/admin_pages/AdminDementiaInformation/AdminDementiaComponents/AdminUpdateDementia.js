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


function AdminUpdateDementia() {

    // Data pulled from server
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [website, setWebsite] = useState('');

    const [titleList, setTitleList] = useState([]);

    const [articleKey, setArticleKey] = useState('');
    const [articleList, setArticleList] = useState([]);

     // On loading up the website - fill titleList and articleList with existing articles from firebase
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setArticleList(articleList => [...articleList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("title").val()]);
                });
            });
    }, [])

    // Once the Key of the article is selected, fill the fields with values from that article
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article/" + articleKey);
        rootRef.on('value', snap => {
                setTitle(snap.child("title").val());
                setPicture(snap.child("pic").val());
                setDescription(snap.child("disc").val());
                setWebsite(snap.child("website").val());
            });
    }, [articleKey])

    // Creates a dropdown of article titles 
    const DropdownTitle = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an article</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => {setTitle(title); setArticleKey(articleList[index])}} key={index}>{title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }



 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
    return (
        <div className="admin-community">
    
            <StyleCommunityContainer>
                
                    <Form className="admin-form">
                        
                        {/* Dropdown for list of Title of Articles */}
                        <Table striped bordered hover className="state-city-dropdown-table">
                            <thead>
                                <tr>
                                    <th>
                                        <DropdownTitle nameList={titleList}/>
                                    </th>
                                </tr>
                            </thead>
                        </Table>

                        {/* Form for Name */}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" id="title-update"  defaultValue={title} />
                        </Form.Group>

                        {/* Form for Description */}
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="name" id="description-update" defaultValue={description}  />
                        </Form.Group>

                        {/* Form for Picture URL */}
                        <Form.Group>
                            <Form.Label>Picture URL</Form.Label>
                            <Form.Control type="name" id="pic-update" defaultValue={picture}  />
                        </Form.Group>

                        {/* Form for Website URL */}
                        <Form.Group>
                            <Form.Label>Website URL</Form.Label>
                            <Form.Control type="name" id="website-update" defaultValue={website} />
                        </Form.Group>
                        
                        {/* Button used to update the page once all the fields are filled out */}
                        <Button onClick={() => update_button(articleKey)} variant="primary" type="submit" className="submit">Update</Button>
                </Form>
            </StyleCommunityContainer>
        </div>
    );
}
export default AdminUpdateDementia;

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


// Used with the Button component in the main rendering function to update the select article with the new fields. 
function update_button(articleKey){ 

    if( document.getElementById("title-update").innerHTML && 
        document.getElementById("description-update").innerHTML &&
        document.getElementById("pic-update").innerHTML &&
        document.getElementById("website-update").innerHTML)
    {
        firebase.database().ref('Article/'+articleKey).set({
            title:      document.getElementById("title-update").value,
            disc:       document.getElementById("description-update").value,
            pic:        document.getElementById("pic-update").value,
            website:    document.getElementById("website-update").value,
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
 