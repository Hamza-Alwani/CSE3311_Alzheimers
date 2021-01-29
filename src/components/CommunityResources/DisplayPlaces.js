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
import Places from './Places'
// firebase imports
 import firebase from '../../shared_comps/firebase'

// css
import '../../css/main.css'; 

// translations


function DisplayPlaces() { 
    // Creates an announcement object
    const [places, setPlaces] = useState(
        {
            address: "",
            name: "",
            phone: "",
            website: "",
           
        });

    const [objectList, setobjectList] = useState([]); // list all postings: placess and videos

    // Pulls each places and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Places");

        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                        setPlaces({...places, 
                            name: childSnapshot.child("name").val(),
                            address: childSnapshot.child("address").val(),
                            phone: childSnapshot.child("phone").val(),
                            website: childSnapshot.child("website").val(),
                            
                        })
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [])

    // Once a change is detected for the places object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if((places.name !== "") && (places.address !== "") && (places.phone !== "")  && (places.website !== "") )
        {
            setobjectList(objectList => [...objectList, places]);
        }
    },[places])


    // Spams placess onto the page depending on how many placess there are on firebase. - we can add a limited in the future when needed


    // Spams articles onto the page depending on how many articles there are on firebase. - we can add a limited in the future when needed


    // Main return of DisplayPlaces(), uses all the function and UseEffects above to compile the page.
    return (
            <div>
                <Places props ={objectList}></Places>
            </div>
    );


}





export default DisplayPlaces;

const DisplayPlacesContainer = styled.div`

${'' /* CSS if needed */}

`;
// 'style-component package used for infile css'
