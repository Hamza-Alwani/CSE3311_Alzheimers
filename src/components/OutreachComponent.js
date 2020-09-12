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


// css
import '../css/main.css'; 

// images
import KaKaoTalk from '../pictures/kakaotalk.png';
import WeChat from '../pictures/wechat.jpg';

function OutreachComponent() {
  return (
    <OutreachContainer>
      <div className="social-div">
        <div className="main-component">

          <div className="gen_header">
              Outreach
          </div>

          <div className="social-container">

            <ul className="social-list">
                <li>
                  <h3>KaKaoTalk</h3>
                  <img src={KaKaoTalk} alt="kakaotalk-social-icon"/>
                  <p>https://open.kakao.com/o/gPYKtsqc</p>
                </li>   

                <li>
                  <h3>WeChat</h3>
                  <img src={WeChat} alt="wechat-social-icon"/>
                  <p>wechat link here</p>
                </li>    
            </ul>


          </div>
        </div>
      </div>
    </OutreachContainer>
  );
}

export default OutreachComponent;

const OutreachContainer = styled.nav`


.social-list
{
    list-style: none;
}

.social-list li 
{
    margin-bottom: 20%;
}

.social-list li img
{
    float: left;
}

.social-list li p
{
    margin-left: 10%;
    float: left;
}


`;