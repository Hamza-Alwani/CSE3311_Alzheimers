import React from 'react';

import styled from 'styled-components'

//bootstrap 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 
import '../css/article.css'; 

// images
import pic1 from '../pictures/background.png';

function Article() {

    return (
        <ArticleContainer>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
         </ArticleContainer>
    );
}


export default Article;

const ArticleContainer = styled.nav`


`;