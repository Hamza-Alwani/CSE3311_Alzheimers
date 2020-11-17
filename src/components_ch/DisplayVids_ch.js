/// summary
///
///	DisplayVideo 
/// - Will be used to display videos an admin has added and allow the user to click on them to read. 
///
/// summary

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

// components
import Video from '../shared_comps/videos'


// firebase imports
 import firebase from '../shared_comps/firebase';

// css
import '../css/main.css'; 

function DisplayVideos() { 
    // Creates an object later used by firebase to store data the user will see once the page is done loading.
    const [article, setArticle] = useState(
        {
                url: "",
                title: "",
                language:"",
                
        });
    const [articleList, setArticleList] = useState([]); // list of all city based on state in firebase

    // Pulls each article and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach");
        
    
        
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    setArticle({...article, 
                            url: childSnapshot.child("url").val(),
                            title: childSnapshot.child("title").val(),
                            language:  childSnapshot.child("language").val(),
                    })
                });
            });
    }, [])

    // Once a change is detected for the article object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if(article.url && article.language==="ch")
        {
            setArticleList(articleList => [...articleList, article]);
        }
    },[article])


    // Spams articles onto the page depending on how many articles there are on firebase. - we can add a limited in the future when needed
    const SpamArticle = ({ props }) => {
        return (
            <div>
                {props.map((state, index) => (
                    
                    <Video props={state} key={index}></Video>

                ))}
            </div>
        );
    };

    // Main return of DisplayArticle(), uses all the function and UseEffects above to compile the page.
    return (
        <div className="all-content">
            <div className="main-component">
                <div className="gen_header">
                </div>
                
                <DisplayVideoContainer>
                            <SpamArticle props ={articleList}></SpamArticle>
                </DisplayVideoContainer>
            </div>
        </div>
    );


}


export default DisplayVideos;

// 'style-component package used for infile css'
const DisplayVideoContainer = styled.div`

${'' /* CSS if needed */}

`;