/// summary
///
///	Article_xx  
/// - A template that will be useed by DisplayArticle_XX to create card like information
///
/// summary



import React from 'react';
import styled from 'styled-components'
import '../css/main.css'; 

function Article( {props} ) {
    return (
            <ArticleContainer>
                <a className="article-text-container"  href={props.website}>
                    <img className="flex-child" style={{ width:"300px", height:"200px" }} src={props.pic} ></img>
                    <div className="flex-child">
                        <div className="article-text-info">
                            <h3>{props.title}</h3>
                            <p>{props.disc}</p>
                            <div className="text-date-posted">
                                <p>Posted November 8th, 2020</p>
                            </div>
                        </div>
                    </div>
                    
                </a>
            </ArticleContainer>
    );
}


export default Article;

const ArticleContainer = styled.div`

.article-text-container {
    text-decoration: none;
    color: black;
    display: flex;
    margin-left: 5rem;
    margin-bottom: 2rem;

    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.article-text-container::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.article-text-container:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
}

.article-text-container:hover::after {
    opacity: 1;
}

.flex-child
{
    ${'' /* border: 2px solid yellow; */}
    ${'' /* height: 200px; */}
    width: 100%;
    position: relative;
}

.article-text-info
{   
    margin-top: 1rem;
    margin-left: 2rem;
}

.text-date-posted
{
    font-size: 12px;
    float: right;
    position: absolute;
    bottom: 0;
    z-index:1;
}

`;