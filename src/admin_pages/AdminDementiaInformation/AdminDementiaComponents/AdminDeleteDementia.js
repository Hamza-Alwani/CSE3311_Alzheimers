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
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [website, setWebsite] = useState('');

    const [titleList, setTitleList] = useState([]);

    const [articleKey, setArticleKey] = useState('');
    const [articleList, setArticleList] = useState([]);

    const [article, setArticle] = useState(
        {
            type: "", // video or articlee
            disc: "",
            pic: "",
            title: "",
            website: "",
            language: ""
        });

    const [video, setVideo] = useState(
        {
            type: "", // video or articlee
            url: "", 
            title: "",
            language:"",
        });
    
    // Set which object (article or video) to display
    const [object, setObject] = useState(article);

     // Onload fill titleList and articleList
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
        const rootRef = database.ref("Article");
        // console.log("called")
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    // console.log("The key was: " + childSnapshot.key)
                    // console.log("The article key was: " + articleKey)
                    if(childSnapshot.key === articleKey)
                    {
                        // console.log("Inside compare")
                        if(childSnapshot.child("type").val() == "video")
                        {
                            setVideo({...video, 
                                type: childSnapshot.child("type").val(),
                                url: childSnapshot.child("url").val(),
                                title: childSnapshot.child("title").val(),
                                language: childSnapshot.child("language").val()
                            })
                            setObject(video);
                        }
                        else if(childSnapshot.child("type").val() == "article")
                        {
                            setArticle({...article, 
                                type: childSnapshot.child("type").val(),
                                disc: childSnapshot.child("disc").val(),
                                pic: childSnapshot.child("pic").val(),
                                title: childSnapshot.child("title").val(),
                                website: childSnapshot.child("website").val(),
                                language: childSnapshot.child("language").val()
                            })
                            setObject(article);
                        }
                    }
                });
            });
    }, [articleKey])

    // Pulls all the article titles
    const DropdownCity = ({ nameList }) => {
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

    const SetDeleteComponent = ({obj}) => 
    {
        if(obj.type == "article")
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
                    <Button onClick={() => delete_button(articleKey)} variant="danger" type="submit" className="submit">Delete</Button>
                </Form>
            );
        }
        else if(obj.type == "video")
        {
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name: {obj.title}</Form.Label>
                    </Form.Group>

                    {/* Form for Website */}
                    <Form.Group>
                        <Form.Label>URL: {obj.url}</Form.Label>
                    </Form.Group>

                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => delete_button(articleKey)} variant="danger" type="submit" className="submit">Delete</Button>
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

function delete_button(articleKey){ 
        firebase.database().ref('Article/'+articleKey).remove();
}

// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 

 
 `;
 