import React from 'react';
import Button from 'react-bootstrap/Button'
// Components
import DisplayAnnouncement from './DisplayAnnouncements';

// bootstrap
import ReactPlayer from "react-player/youtube"

// css
import '../../css/main.css'; 
import '../../css/home.css'

// images
import SomangLogo from '../../pictures/somang2.png';
import UTALogo from '../../pictures/uta.png';



import strings from '../../translation/HomeLang.js'
strings.setLanguage(localStorage.getItem("Language"));

function HomePage() {
    return (
       <div>
            <div className="whole">
                
                <div className="top">
                    <DisplayAnnouncement></DisplayAnnouncement>
                </div>

                <div className="bottom">
                    <div className="title">
                   
                        <p> {strings.Title1 }</p>
                        <p>{strings.Title2}</p>
                        <br></br>
                    </div>
                
                    <div className="banner">
                       
                    <div className='player-wrapper'>
                    <ReactPlayer
                      url={strings.Video}
                      className='react-player'
                      controls
                      width='90%'
                      height='90%'
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }}
                    />
                  </div>

                        <br></br>
                        
                        
                        <div className="buttons">
                          {/*  <a href="/Community_Resources"><i>{strings.Button1}</i></a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a href="/Community_Resources"><i>{strings.Button2}</i></a>
                            */}

                            <a href="/Community_Resources"><i>
                                <Button variant="primary" size="lg" block>
							        {strings.Button1}
						        </Button>
                            </i></a>
                            
                            <a href="/Community_Resources"><i>
                                <Button variant="primary" size="lg" block>
							        {strings.Button2}
						        </Button>
                            </i></a>
                            
                        </div>
                        
                    </div>
            

                    <div className="logocont">
                            <a href="https://www.somangsociety.org/" target="_blank" rel="noopener noreferrer" >
                                <img
                                className="logos"
                                src={SomangLogo}
                                alt="First slide"
                                />
                            </a>
                            <a href="https://www.uta.edu/" target="_blank" rel="noopener noreferrer" >
                                <img className="logos"
                                src={UTALogo}
                                alt="First slide"
                                />
                            </a>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default HomePage;

