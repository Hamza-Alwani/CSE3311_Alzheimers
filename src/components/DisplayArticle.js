// To do

import React from 'react';
import styled from 'styled-components'

// components
import Article from '../components/Article'

// css
import '../css/main.css'; 


function DisplayArticle() {

    return (
        <ArticleContainer>
            <div className="all-content">
                <div className="main-component">
                    <div className = "article-display-style">
                        <Article></Article>
                    </div>
                </div>
            </div>
         </ArticleContainer>
    );
}


export default DisplayArticle;

const ArticleContainer = styled.nav`

.article-display-style
{
    ${'' /* float:left; */}
}

`;