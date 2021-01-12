import React from 'react';
import styled from 'styled-components'

// Components
import Announcement from './Announcement';

// bootstrap
import ReactPlayer from "react-player/youtube"

// css
import '../../css/main.css'; 

// images
import SomangLogo from '../../pictures/somang2.png';
import UTALogo from '../../pictures/uta.png';


function BottomHalf() {
    return (
        <HomePageContainer>
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
        </HomePageContainer>
    );
}
export default BottomHalf;

const HomePageContainer = styled.div`
div.whole
{
width: 100%;
height: 100vh;
display: block;
position: relative;

}
div.top
{
    margin-top: 5rem;
    
    display: block;
    position: relative;
    width: 100%;
    height: 60%;

}


div.bottom
{
    position: relative;
    display:block;
    width: 100%;
    height: 100%;  
    background: url(../pictures/bg.jpg);
    background-size:cover;
    background-repeat: no-repeat ;
    background-position: 85% 0% ;
    margin-top: 0;
    padding-top: 0;
}

div.title
{
    position: relative;
    display: block;
    font-size: 4.0vw;
    font-weight: 950;
    margin-left: 5%;
}
.title p
{
    //background-color: aquamarine;
    
}

div.banner
{
    position: relative;
    display: inline-block;
    top: 0;
    height: auto;
    bottom:  22em;
    margin-left: 5%; 
    
}
.video-wrapper
{
    display: block;
    top:0;
    width:  32vw;
    height: 18vw;
    position: relative;
    border: black;
    border-style:  none;
    border-width: 5px ;
    /* todo*/ 
}
.react-player
{
    position: absolute;
    top: 0;
    left: 0;
}
div.logocont
{
    position: absolute;
    bottom: 0;
    width:100%;
    height: auto;
    max-height: max-content;  
    text-align: center;
    margin-bottom: 1%;


    /*font-size: 15px;
    font-weight: 950;
    */
}
img.logos 
{  
    max-width: 22em;
    min-width: 15em;
    width: 10%;
    height: auto;
    margin: 0% 1%;
}    


div.buttons
{
display: inline-block;
position: relative;
bottom: 0;
text-align: center;
margin-top: 2%;
padding: 0% 20%;
width: 100%;
//background-color: brown;



}

.buttons a
{
//background-color: black;

color: white;
padding: 1%;
font-size: 5vw;

}
/*phone*/
@media (max-width: 1000px) 
{
div.whole
{
top:0;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 100vh;
display: block;
position:relative;

}
div.top
{
    border: black;
    border-style:  none;
    border-width: 5px ;
    margin-top: 5rem;
    //background-color: black;
    display: block;
    position: relative;
    width: 100%;
    height: 33%;

}

div.bottom
{
    position: relative;
    display:block;
    width: 100%;
    height: 100%;  
    background: url(../pictures/bg.jpg);
    background-size:cover;
    background-repeat: no-repeat ;
    background-position: 85% 0% ;
    margin-top: 0%;

}

div.title
{
    position: relative;
    display: block;
    font-size: 5.0vw;
    font-weight: 950;
    margin-left: 5%;
    text-align: center;

}

div.banner
{
    position: relative;
    display: inline-block;
    top: 0;
    width: 100%;
    height: auto;
    bottom:  22em;
    margin-left: 0%; 
    

}

.video-wrapper
{
    top:0;
    display: block;
    position: relative;
    border: black;
    border-style:  none;
    border-width: 5px ;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 10%;
    width: 64vw;
    height: 32vw;
}
.react-player
{
    position: absolute;
    top: 0;
    left: 0;
    
}
div.logocont
{
    display: block;
    position: absolute;
    bottom: 0;
    width:100%;
    height: auto;
    max-height: max-content;  
    text-align: center;
    margin-bottom: 1%;
    /*font-size: 15px;
    font-weight: 950;
    */
}
img.logos 
{  
    max-width: 22em;
    min-width: 9em;
    width: 15%;
    height: auto;
    margin: 0% 1%;
    padding-bottom: 4%;
}


@media (max-width: 1000px) and (orientation:landscape) 
{
div.top
{
    width: 100%;
    height: 60%;
}

.video-wrapper
{
    text-align: center;
    width: 64vh;
    height: 32vh;
}
.react-player
{
    position: absolute;
    top: 0;
    left: 0;
    
}
}
}
/*
To do later
div.buttons
{
display: inline-block;
position: relative;
bottom: 0;
text-align: center;
margin-top: 2%;
padding: 0% 20%;
width: 100%;
background-color: brown;


}

.buttons a
{
background-color: black;
font-size: x-large;
color: white;
padding: 1%;

}
*/

`