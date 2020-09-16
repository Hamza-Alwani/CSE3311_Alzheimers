import React from 'react';
import styled from 'styled-components'

// components
import Article from '../components/Article'

// css
import '../css/main.css'; 


// add more functions to display article so it can pull data from firebase and give it to article cell
function DisplayArticle() { 


    return (
        <div className="all-content">
            <div className="main-component">
                <DisplayArticleContainer>
                    <div className = "article-display-style">
                        <Article></Article>
                    </div>
                </DisplayArticleContainer>
            </div>
        </div>
    );


}


export default DisplayArticle;

const DisplayArticleContainer = styled.div`

.article-display-style
{
    ${'' /* float: left; */}
}

`;