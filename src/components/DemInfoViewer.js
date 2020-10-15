/// summary
///
///	DemInfoViewer  - In Development
/// - Admins will view articles and have the ablility to create/delete them in the future.
///
/// summary


import React from 'react';

// components
import  firebase from '../components/firebase';

// bootstrap components
import { Button } from 'react-bootstrap';

//css
import '../css/main.css'


// Currently spams all the articles and gives the admin the ability to delete the article 
function Admin_DemInfoViewer(obj) 
{
    return(
        <div className="boundry">
        <div className="body">
           {
               <div>
              <p>
                 ref={obj.id}
                 <br></br>
                 discrpition={obj.disc}
                 <br></br>
                 pic_url={obj.pic}
                 <br></br>
                 title={obj.title}
                 <br></br>
                 link={obj.website}
              </p>                       
               <Button onClick={() => delete_button_pressed(obj.id)}>Delete</Button>
               </div>
           }
        </div>
       
    </div>
    )
}
export default Admin_DemInfoViewer

// Deleted an article with a specific ID under Article in firebase
function delete_button_pressed(obj)
{
    firebase.database().ref('Article').child(obj).remove().then(function()
    {
        window.alert("Message Deleted");
        window.location.reload(false);
        }).catch(function(error){
    });
}