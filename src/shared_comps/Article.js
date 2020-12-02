/// summary
///
///	Article_xx  
/// - A template that will be useed by DisplayArticle_XX to create card like information
///
/// summary



import React from 'react';
import styled from 'styled-components'
import '../css/main.css'; 
import '../css/article.css'

function Article( {props} ) {
    return (
            <ArticleContainer>
                <a className="article-text-container"  href={props.website}>
                    <img className="article-image" src={props.pic} alt={props.pic}></img>
                    <div className="flex-child">
                        <div className="article-text-info">
                            <div className="article-title">{props.title}</div>
                            <div className="article-discription">{props.disc}</div>
                            <div className="text-date-posted">
                                {/* Posted November 8th, 2020 */}
                            </div>
                        </div>
                    </div>
                </a>
            </ArticleContainer>
    );
}


export default Article;

const ArticleContainer = styled.div`


`;

