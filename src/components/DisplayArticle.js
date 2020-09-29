/// summary
///
///	DisplayArticle  
/// - Will be used to display articles an admin has added and allow the user to click on them to read. 
///
/// summary

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

// components
import Article from '../components/Article'
import CardDeck from 'react-bootstrap/CardDeck'

// firebase imports
import firebase from '../components/firebase';

// css
import '../css/main.css'; 

function DisplayArticle() { 
    // Creates an object later used by firebase to store data the user will see once the page is done loading.
    const [article, setArticle] = useState(
        {
                disc: "",
                pic: "",
                title: "",
                website: ""
        });
    const [articleList, setArticleList] = useState([]); // list of all city based on state in firebase

    // Pulls each article and links with the other useEffect below this one.
    useEffect(() => {
        const database = firebase.database()
        const rootRef = database.ref("Article");
        
        rootRef.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    setArticle({...article, 
                            disc: childSnapshot.child("disc").val(),
                            pic: childSnapshot.child("pic").val(),
                            title: childSnapshot.child("title").val(),
                            website: childSnapshot.child("website").val()
                    })
                });
            });
        // The comment below disables a warning given to us because statelist isn't passed to the [] below
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Once a change is detected for the article object, it will be added to a list to be spamed onto the page
    useEffect(() => {
        if((article.disc !== "") && (article.pic !== "") && (article.title !== "") && (article.website !== ""))
        {
            setArticleList(articleList => [...articleList, article]);
        }
    },[article])


    // Spams articles onto the page depending on how many articles there are on firebase. - we can add a limited in the future when needed
    const SpamArticle = ({ props }) => {
        return (
            <CardDeck>
                {props.map((state, index) => (
                <Article props={state} key={index}></Article>
                ))}
            </CardDeck>
        );
    };

    // Main return of DisplayArticle(), uses all the function and UseEffects above to compile the page.
    return (
        <div className="all-content">
            <div className="main-component">
                <DisplayArticleContainer>
                            <SpamArticle props ={articleList}></SpamArticle>
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