/// summary
///
///	Outreach Component.  
/// - The component should be able to be inserted into any react page
/// - 
/// 
/// summary

/// To Do
///   - 

import React from 'react';
import styled from 'styled-components'

// bootstrap components
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

// css
import '../css/main.css'; 

// images
import KaKaoTalk from '../pictures/kakaotalk.png';


function OutreachComponent() {
  return (

        // The div main-component is used to push against the footer
        <div className="main-component">
          
          {/* Title of the page, the div is essential to push against the content below it */}
          <div className="gen_header">
              Outreach
          </div>
          
          {/* 
              OutreachContainer is style-component applying css to the section surrounded by the Container.
           */}
          <OutreachContainer>
            <div className="kakaochat-div">
              <Card>
                <Card.Header>KaKaoTalk</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                  <Image src={KaKaoTalk} roundedCircle />
                  <div className="kakaotalk-content">
                    <p >
                      {' '}Join our Korean speaking group chat!{' '}
                    </p>
                    <Button  className="kakaotalk-button" variant="warning" href="https://open.kakao.com/o/gPYKtsqc">Group Chat</Button>
                  </div>
                   
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          </OutreachContainer>
          <b>test</b>
        </div>
  );
}

export default OutreachComponent;


// 'style-component package used for infile css'
const OutreachContainer = styled.div`

.kakaochat-div
{
  width: 50%;
  margin: auto;
}

.kakaotalk-content
{
  float: right;
}

.kakaotalk-button
{
  float: right;
}

`;