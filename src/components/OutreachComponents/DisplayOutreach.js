/// summary
///
///	DisplayOutreach  
/// - Will be used to display outreachs an admin has added and allow the user to click on them to read. 
///
/// summary

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

// components
import Article from '../../shared_comps/Article'

// firebase imports
 import firebase from '../../shared_comps/firebase';

// css
import '../../css/main.css'; 

// translations
import strings from '../../translation/OutreachLang.js'
strings.setLanguage(localStorage.getItem("Language"));

function DisplayOutreach() { 
    // Creates an outreach object
    const [outreach, setOutreach] = useState(
        {
            type: "", // video or outreache
            disc: "",
            pic: "",
            title: "",
            website: "",
            language: ""
        });

    const [objectList, setobjectList] = useState([]); // list all postings: outreachs and videos

    // Pulls each outreach/video and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Outreach");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                        setOutreach({...outreach, 
                            type: childSnapshot.child("type").val(),
                            disc: childSnapshot.child("disc").val(),
                            pic: childSnapshot.child("pic").val(),
                            title: childSnapshot.child("title").val(),
                            website: childSnapshot.child("website").val(),
                            language: childSnapshot.child("language").val()
                        })
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [])

    // Once a change is detected for the outreach object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if((outreach.type !== "") && (outreach.disc !== "") && (outreach.pic !== "") && (outreach.title !== "") && (outreach.website !== "") && (outreach.language=== localStorage.getItem("Language") ))
        {
            setobjectList(objectList => [...objectList, outreach]);
        }
    },[outreach])


    // Spams outreachs onto the page depending on how many outreachs there are on firebase. - we can add a limited in the future when needed
    const SpamObjects = ({ props }) => {
        return (
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {props.map((state, index) => {
                    if(state.type === "outreach")
                        return <Article props={state} key={index}></Article>
                    return null;
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
    

    // Main return of DisplayOutreach(), uses all the function and UseEffects above to compile the page.
    return (
        <div className="all-content">
            <div className="main-component">
                <div className="gen_header">
                    {strings.Header}
                </div>
                <DisplayOutreachContainer>
                            <SpamObjects props ={objectList}></SpamObjects>
                </DisplayOutreachContainer>
            </div>
        </div>
    );


}


export default DisplayOutreach;

// 'style-component package used for infile css'
const DisplayOutreachContainer = styled.div`

${'' /* CSS if needed */}

`;