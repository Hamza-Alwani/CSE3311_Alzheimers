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


function AdminUpdateDementia() {

    // List of article/video by name
    const [titleList, setTitleList] = useState([]);

    // List of keys to pick from later 
    const [articleKey, setArticleKey] = useState('');

    // Specific key to locate article/video in firebase
    const [objectList, setObjectList] = useState([]);

    // Article/Video objects after key is select and information is pulled from firebase
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

    const [object, setObject] = useState(article);

     // On loading up the website - fill titleList and objectList with existing articles from firebase
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article/");
        rootRef.on('value', snap => {
                    snap.forEach(function(childSnapshot) {
                        setObjectList(objectList => [...objectList, childSnapshot.key]);
                        setTitleList(titleList => [...titleList, childSnapshot.child("title").val()]);
                });
            });
    }, [])

    

    // Once the Key of the article is selected, fill the fields with values from that article
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    if(childSnapshot.key === articleKey)
                    {
                        if(childSnapshot.child("type").val() === "video")
                        {
                            setVideo({...video, 
                                type: childSnapshot.child("type").val(),
                                url: childSnapshot.child("url").val(),
                                title: childSnapshot.child("title").val(),
                                language: childSnapshot.child("language").val()
                            })
                        }
                        else if(childSnapshot.child("type").val() === "article")
                        {
                            setArticle({...article, 
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
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [articleKey])

    // Once the article or video object is finished being created, set the object to be used
    useEffect(() => {
        setObject(video);
    }, [video])

    useEffect(() => {
        setObject(article);
    }, [article])

    // Creates a dropdown of article titles 
    const DropdownTitle = ({ nameList }) => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">Pick an article</Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                    {nameList.map((title, index) => (
                        <Dropdown.Item onClick={() => { setArticleKey(objectList[index]); /*console.log(objectList[index]);*/ }} key={index}>{title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }


    const SetFrame = ({obj}) => 
    {
        if(obj.type === "article")
        {
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" id="article-title-update"  defaultValue={article.title} />
                    </Form.Group>

                    {/* Form for Description */}
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="name" id="article-description-update" defaultValue={article.disc}  />
                    </Form.Group>

                    {/* Form for Picture URL */}
                    <Form.Group>
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="name" id="article-pic-update" defaultValue={article.pic}  />
                    </Form.Group>

                    {/* Form for Website URL */}
                    <Form.Group>
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control type="name" id="article-website-update" defaultValue={article.website} />
                    </Form.Group>
                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => update_article_button(articleKey)} variant="primary" type="submit" className="submit">Update</Button>
                </Form>
            );
        }
        else if(obj.type === "video")
        {
            return (
                <Form className="admin-form">
                    {/* Form for Name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" id="video-title-update"  defaultValue={video.title} />
                    </Form.Group>

                    {/* Form for Website */}
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="name" id="video-website-update" defaultValue={video.url}  />
                    </Form.Group>

                    {/* Someone update the language somehow it's 5am right now */}
                    {/* <Form.Group>
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="name" id="article-pic-update" defaultValue={video.language}  />
                    </Form.Group> */}

                    
                    {/* Button used to update the page once all the fields are filled out */}
                    <Button onClick={() => update_video_button(articleKey)} variant="primary" type="submit" className="submit">Update</Button>
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
                    
                    {/* After the article/video is select, create the form to edit */}
                    <SetFrame key={object }obj={object}> </SetFrame>

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


// Used with the article update section
function update_article_button(articleKey){ 

    if( document.getElementById("article-title-update").value && 
        document.getElementById("article-description-update").value &&
        document.getElementById("article-pic-update").value &&
        document.getElementById("article-website-update").value)
    {
        firebase.database().ref('Article/'+articleKey).set({
            title:      document.getElementById("article-title-update").value,
            disc:       document.getElementById("article-description-update").value,
            pic:        document.getElementById("article-pic-update").value,
            website:    document.getElementById("article-website-update").value,
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
function update_video_button(videoKey){ 

    if( document.getElementById("video-title-update").value && 
        document.getElementById("video-website-update").value)
    {
        firebase.database().ref('Article/'+videoKey).set({
            title:      document.getElementById("video-title-update").value,
            url:    document.getElementById("video-website-update").value,
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
 