/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {Component,useState}  from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../shared_comps/firebase';



// bootstrap
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

//css
import '../../../css/admin.css'

var e=false;
var c=false;
var k=false;

function change_e()
{
   e=!e
}
function change_c()
{
   c=!c
}
function change_k()
{
   k=!k
}



function AdminAddAnnouncements() {
   const [image, setImage] = useState(null);
   const [url, setUrl] = useState("");
   const [progress, setProgress] = useState(0);

   const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  

    const handleUpload = () => {
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
         firebase.storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              add_article_button(url)
            });

        }
      );
    };
   
 ///////////////////////////////////////////////////////////////////////////////////////
   // HTML
 
   console.log("image: ", image);
/*
   return (
     <div>
       <progress value={progress} max="100" />
       <br />
       <br />
       <input type="file" onChange={handleChange} />
       <br/>
       <br/>
       <input type="name" placeholder="link"/> 
       <button onClick={handleUpload}>Upload</button>
       <br />
       {url}
       <br />
       <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
     </div>
   );
 }
 */

   return (
      
      <div className="admin-community">
         <StyleCommunityContainer>
            <Form className="admin-form">
               <Form.Group>
                  <Form.Label>upload picture</Form.Label>
                  <Form.Control type="file" id="picture" placeholder="www.example.com/picture.jpg" onChange={handleChange} />
                  <progress value={progress} max="100" />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="name" id="link" placeholder="www.example.com" />
               </Form.Group>     
               <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <Form.Check
                     type="switch"
                     label="English"
                     name="formHorizontalRadios"
                     id="en"
                     onChange={change_e}
                  />
                  <Form.Check
                     type="switch"
                     label="Chinese"
                     name="formHorizontalRadios"
                     id="ch"
                     onChange={change_c}
                  />
                  <Form.Check
                     type="switch"
                     label="Korean"
                     name="formHorizontalRadios"
                     id="ko"
                     onChange={change_k}
                  />
                  <Button onClick={handleUpload}variant="primary">Add</Button>
                  
                
               </Form.Group>
            </Form>   
         </StyleCommunityContainer>
</div>


);
 }

 export default AdminAddAnnouncements;

// Customize style of dropdowns
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
      <div id="state">{children}</div>
   </a>
   ));
CustomToggle.propTypes = 
{
   // fixing prop type erros but idk how too yet 
   // children: Array,
   // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";


// Once all the text are filled out then this function is called to submit the information to firebase.


function add_article_button(url){ 

   var key;
   window.alert(url)


   if(url && document.getElementById("link").value)
   {
      if(e) 
      {
         key = firebase.database().ref('Announcements').push().key;
         firebase.database().ref('Announcements/'+key).set({
               pic:url,
               website:document.getElementById("link").value,
               language:"en",
         },function(error){
               if(error){
               window.alert("failed");
               }else{
               window.alert("yes");
               window.location.reload(false);
               }
         });
      }
      if(c)
      {
         key = firebase.database().ref('Announcements').push().key;
         firebase.database().ref('Announcements/'+key).set({
               pic:url,
               website:document.getElementById("link").value,
               language:"ch",
         },function(error){
               if(error){
               window.alert("failed");
               }else{
               window.alert("yes");
               window.location.reload(false);
               }
         });
      }
      if(k)
      {
         key = firebase.database().ref('Announcements').push().key;
         firebase.database().ref('Announcements/'+key).set({
               pic:url,
               website:document.getElementById("link").value,
               language:"ko",
         },function(error){
               if(error){
               window.alert("failed");
               }else{
               window.alert("yes");
               window.location.reload(false);
               }
         });
      }
      if( !c && !k && !e)
      {
         window.alert("Failed, select a language");
      }
   }
   else
   {
      window.alert("Failed, make sure all fields are full");
   }
}


// 'style-component package used for infile css'
const StyleCommunityContainer = styled.nav`
 
 
`