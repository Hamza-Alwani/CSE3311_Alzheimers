import React from 'react';
import styled from 'styled-components'

// bootstrap
import ReactPlayer from "react-player/youtube"

// css
import '../../css/main.css'; 
import '../../css/bottom_half.css'

import SomangLogo from '../../pictures/somang2.png';
import UTALogo from '../../pictures/uta.png';
import Announcement from './Announcement';



function BottomHalf() {
    return (
        <div className="whole">
        
            <div className="top">
               <Announcement></Announcement>
            </div>

            <div className="bottom">
                <div className="title">
                    <p>DEMENTIA COMMUNITY</p>
                    <p>FOR ASIAN CAREGIVERS</p>
                </div>
                
                


                
                <div className="banner">
                    <div className="video-wrapper">
                        <ReactPlayer 
                         width="100%"
                         height="100%"
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"/>
                    </div>
                
                    <br></br>
                    
                    {/*
                    <div className="buttons">
                        <a href="/Community_Resources"><i>see facilites near you</i></a>
                        <br></br>
                        <br></br>
                        <a href="/Community_Resources"><i>see facilites near you</i></a>
                    </div>
                    */}
                </div>
                

                <div className="logocont">
                        {/* <p>lorem ipsum</p>*/ }           
                        <a href="https://www.somangsociety.org/" target="_blank">
                            <img
                            className="logos"
                            src={SomangLogo}
                            alt="First slide"
                            />
                        </a>
                        <a href="https://www.uta.edu/" target="_blank">
                            <img className="logos"
                            src={UTALogo}
                            alt="First slide"
                            />
                        </a>
                </div>
            </div>
        </div>
    );
}
export default BottomHalf;

