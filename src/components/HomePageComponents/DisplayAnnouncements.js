/// summary
///
///	DisplayOutreach  
/// - Will be used to display announcements an admin has added and allow the user to click on them to read. 
///
/// summary

import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components'
// components
import Announcement from './Announcement'
import Carousel from 'react-bootstrap/Carousel'
// firebase imports
 import firebase from '../../shared_comps/firebase'


// translations


function DisplayAnnouncement() { 
    // Creates an announcement object
    const [announcement, setAnnouncement] = useState(
        {
            pic: "",
            website: "",
            language: ""
        });

    const [objectList, setobjectList] = useState([]); // list all postings: announcements and videos

    // Pulls each announcement and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Announcements");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                        setAnnouncement({...announcement, 
                            pic: childSnapshot.child("pic").val(),
                            website: childSnapshot.child("website").val(),
                            language: childSnapshot.child("language").val()
                        })
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [])

    // Once a change is detected for the announcement object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if((announcement.pic !== "") && (announcement.website !== "") && (announcement.language=== localStorage.getItem("Language") ))
        {
            setobjectList(objectList => [...objectList, announcement]);
        }
    },[announcement])


    // Spams announcements onto the page depending on how many announcements there are on firebase. - we can add a limited in the future when needed
    const SpamObjects = ({ props }) => {
        return (
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {props.map((state, index) => {
                        return <Announcement props={state} key={index}></Announcement>
                })}
            </div>
        );
    };

    SpamObjects.propTypes = {
        props: PropTypes.arrayOf( 
            PropTypes.shape({
                pic: PropTypes.string,
                website: PropTypes.string,
                language: PropTypes.string
            }),
        )
    }

    // Main return of DisplayAnnouncement(), uses all the function and UseEffects above to compile the page.
    return (

                <div class="slideshow-container">
                    <SpamObjects props ={objectList}></SpamObjects>
                </div>
               
                    
               
    );


}


export default DisplayAnnouncement;

const DisplayAnnouncementContainer = styled.div`

${'' /* CSS if needed */}

`;
// 'style-component package used for infile css'
