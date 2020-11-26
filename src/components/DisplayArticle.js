/// summary
///
///	DisplayArticle  
/// - Will be used to display articles an admin has added and allow the user to click on them to read. 
///
/// summary

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

// components
import Article from '../shared_comps/Article'
import Video from '../shared_comps/videos'

// firebase imports
 import firebase from '../shared_comps/firebase';

// css
import '../css/main.css'; 

// translations
import strings from '../translation/DementiaLang.js'
strings.setLanguage(localStorage.getItem("Language"));

function DisplayArticle() { 
    // Creates an article object
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

    const [objectList, setobjectList] = useState([]); // list all postings: articles and videos

    // Pulls each article/video and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    if(childSnapshot.child("type").val() == "video")
                    {
                        setVideo({...video, 
                            type: childSnapshot.child("type").val(),
                            url: childSnapshot.child("url").val(),
                            title: childSnapshot.child("title").val(),
                            language: childSnapshot.child("language").val()
                        })
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
                    }
                });
            });
    }, [])

    // Once a change is detected for the article object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if((article.type !== "") && (article.disc !== "") && (article.pic !== "") && (article.title !== "") && (article.website !== ""), (article.language=== localStorage.getItem("Language") ))
        {
            setobjectList(objectList => [...objectList, article]);
        }
    },[article])

    // Once a change is detected for the video object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        console.log(video.type)
        console.log(video.url)
        console.log(video.title)
        console.log(video.language)
        if((video.type !== "") && (video.url !== "") && (video.title !== "") && (video.language === localStorage.getItem("Language")))
        {
            console.log("video found")
            setobjectList(objectList => [...objectList, video]);
        }
    },[video])


    // Spams articles onto the page depending on how many articles there are on firebase. - we can add a limited in the future when needed
    const SpamObjects = ({ props }) => {
        return (
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {props.map((state, index) => {
                    {/* console.log(state) */}
                    if(state.type == "video")
                        return <Video props={state} key={index}></Video>
                    else if(state.type == "article")
                        return <Article props={state} key={index}></Article>
                })}
            </div>
        );
    };
    SpamObjects.propTypes = {
        props: PropTypes.arrayOf( 
            PropTypes.shape({
                disc: PropTypes.string,
                pic: PropTypes.string,
                title: PropTypes.string,
                website: PropTypes.string,
                language: PropTypes.string
            }),
        )
    }
    

    // Main return of DisplayArticle(), uses all the function and UseEffects above to compile the page.
    return (
        <div className="all-content">
            <div className="main-component">
                <div className="gen_header">
                    {strings.Header}
                </div>
                <DisplayArticleContainer>
                            <SpamObjects props ={objectList}></SpamObjects>
                </DisplayArticleContainer>
            </div>
        </div>
    );


}


export default DisplayArticle;

// 'style-component package used for infile css'
const DisplayArticleContainer = styled.div`

${'' /* CSS if needed */}

`;