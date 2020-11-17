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

// firebase imports
 import firebase from '../shared_comps/firebase';

// css
import '../css/main.css'; 

function DisplayArticle() { 
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
        if(article.url && article.language==="ko")
        {
            setArticleList(articleList => [...articleList, article]);
        }
    },[article])


    // Spams articles onto the page depending on how many articles there are on firebase. - we can add a limited in the future when needed
    const SpamArticle = ({ props }) => {
        return (
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {props.map((state, index) => (
                    <Article props={state} key={index}></Article>
                ))}
            </div>
        );
    };
    SpamArticle.propTypes = {
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
                </div>
                
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