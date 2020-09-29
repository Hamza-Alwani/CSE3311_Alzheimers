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

// css
import '../css/main.css'; 

// images
import KaKaoTalk from '../pictures/kakaotalk.png';
import WeChat from '../pictures/wechat.jpg';


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
              Inside we used the Table component from bootstrap to position the groupchat links below.
           */}
          <OutreachContainer>
            <Table striped bordered hover responsive size="sm">

              <thead>
                <tr>
                  <th>KaKaoTalk</th>
                  <th>WeChat</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <img src={KaKaoTalk} alt="kakaotalk-social"/>
                  </td>
                  <td>
                    <img src={WeChat} alt="wechat-social"/>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>
                    <Button variant="warning" href="https://open.kakao.com/o/gPYKtsqc">KaKaoTalk Group Chat</Button>
                  </td>
                  <td>
                    <Button variant="success" href="https://www.wechat.com/">WeChat Group Chat</Button>
                  </td>
                </tr>
              </tbody>
              
            </Table>
          </OutreachContainer>
        </div>
  );
}

export default OutreachComponent;


// 'style-component package used for infile css'
const OutreachContainer = styled.div`

td
{
  width:50%;
}

`;