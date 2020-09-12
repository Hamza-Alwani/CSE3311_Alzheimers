import React from 'react';

import styled from 'styled-components'

// css
import '../css/main.css'; 
import '../css/article.css'; 

// images
import pic1 from '../pictures/background.png';

function Article() {

    return (
        <ArticleContainer>
            <div className="article-container">
                

                <div className="pic">
                    <img src={pic1} alt="pic of lady"/> 
                </div>

                <div className="title">
                    <a href="https://google.com" target="_blank"  rel="noopener noreferrer">  learn about alzimers </a>
                </div>

                <div className="discription">
                    <p> this is a discription for the thing asdasd</p>
                </div>

            </div>
         </ArticleContainer>
    );
}


export default Article;

const ArticleContainer = styled.nav`

    .article-container
    {
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .article-container ul 
    {	
        /*top: 100%;*/
        width: 100%;
    }

    .article-container ul li
    {
        float: left;
        width: 30%;
        list-style: none;
    }

    .article-container ul li img
    {
        float: left;
        width: 100%;
        list-style: none;
        margin: 0px;
    }

    .article
    {
        text-align: center;
    }

    ${'' /* .jBDKcv .container 
    {
        overflow: hidden;
        position: relative;
        width: 100%;    
    } */}

    .article-container 
    {
        max-height: 400px;
        max-width: 400px;
        width: auto;
        height: auto;
        margin: .5% .5%;
        padding: 1%;
        display: inline-block;
        background-color: gray;
        text-align: center;
    }

    .pic img
    {
    max-width: auto;
    max-height: auto;
    width: 100%;
    height: 100%;
    margin-bottom: 2% ;
    }   

    .title a {
        max-width: 500px;
        max-height: 50px;
        width: 100%;
        height: 100%;
        margin: 10% 0%;   
        text-align: left;
        font-size: x-large;
        width: 100%;
        padding-top: 1%;
        color: black;
        text-decoration:underline ;
        


    }

    .discription p{
        max-height: fit-content;
        padding-top: 2%;
        width: auto;
        height: auto;
        font-size:auto ;
    }

`;