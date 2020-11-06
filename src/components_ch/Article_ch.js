/// summary
///   Used to display Articles on Dementia Information page
/// summary

import React from 'react';

import styled from 'styled-components'

//bootstrap 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// css

import '../css/main.css'; 

function Article( {props} ) {

    return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pic} />
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text> {props.disc} </Card.Text>
                    <a href={props.website} target="_blank"> <Button variant="primary">Go </Button></a>
                </Card.Body>
            </Card>
    );
}


export default Article;

