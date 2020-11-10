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

    const [title, setTitle] = useState('');
    const [url, seturl] = useState('');

    const [titleList, setTitleList] = useState([]);

    const [articleKey, setOutreachKey] = useState('');
    const [articleList, setOutreachList] = useState([]);

     // Onload fill titleList and articleList
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setOutreachList(articleList => [...articleList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("title").val()]);
                });
            });
    }, [])

    // Pulls the requested data
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach/" + articleKey);
        rootRef.on('value', snap => {
                setTitle(snap.child("title").val());
                seturl(snap.child("url").val());
            });
    }, [articleKey])

    // Pulls all the article titles
    const DropdownCity = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an article</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => {setTitle(title); setOutreachKey(articleList[index])}} key={index}>{title}</Dropdown.Item>
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
            
                {/* Drop down to pick citys */}
                <Form className="admin-form">
                    
                    <Table striped bordered hover className="state-city-dropdown-table">
                        <thead>
                            <tr>
                                <th>
                                    <DropdownCity nameList={titleList}/>
                                </th>
                            </tr>
                        </thead>
                    </Table>

                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name: {title}</Form.Label>
                    </Form.Group>

                    {/* Form for Description */}


                    {/* Form for url URL */}
                    <Form.Group>
                        <Form.Label>url URL: {url}</Form.Label>
                    </Form.Group>
                    
                    {/* Button used to delete the selected article ID once the key are selected */}
                    <Button onClick={() => delete_button(articleKey)} variant="danger" type="submit" className="submit">Delete</Button>
               </Form>
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

function delete_button(articleKey){ 
        firebase.database().ref('Outreach/'+articleKey).remove();
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 