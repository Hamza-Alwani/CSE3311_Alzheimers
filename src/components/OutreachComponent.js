/// summary
///
///	Dementia Component section.  
/// The component should be able to be inserted into any page
///
/// summary

/// To Do
///   - The images won't float left and are centered in the ul li element for some reason

import React from 'react';
import styled from 'styled-components'

// bootstrap 
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// css
import '../css/main.css'; 

// images
import KaKaoTalk from '../pictures/kakaotalk.png';
import WeChat from '../pictures/wechat.jpg';

function OutreachComponent() {
  return (
    
        <div className="main-component">
          <div className="gen_header">
              Outreach
          </div>
          
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
                    <Button variant="success" href="https://open.kakao.com/o/gPYKtsqc">WeChat Group Chat</Button>
                  </td>
                </tr>
              </tbody>
              
            </Table>
          </OutreachContainer>
        </div>
  );
}

export default OutreachComponent;

const OutreachContainer = styled.div`

td
{
  width:50%;
}

`;