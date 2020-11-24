import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 
import '../css/aboutUs.css'; 

import pic1 from '../pictures/mem4.jpg';
import pic2 from '../pictures/mem2.jpg';
import pic3 from '../pictures/mem3.jpg';
import pic4 from '../pictures/mem1.jpg';

// translations
import strings from '../translation/AboutUsLang.js'
strings.setLanguage(localStorage.getItem("Language"));

function AboutUsComponent() {
    return (
        <AboutUsContainer>
            <body>
                <h1>{strings.MeetOurTeam}</h1>
                <div className="container">
                    {/* Dr. Lee */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic1} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">{strings.KathyLee}</h3>
                            <h3 className="title">{strings.KathyEducation}</h3>
                            <span className="post">{strings.KathyPosition}</span>
                        </div>
                        {/* intro? */}
                    </div>

                    {/* Dr. Seo */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic2} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">{strings.ChangHyunSeo}</h3>
                            <h3 className="title">{strings.ChangEducation}</h3>
                            <span className="post">{strings.ChangPosition}</span>
                        </div>
                    </div>
                    
                    {/* Joe */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic3} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">{strings.JoeZhao}</h3>
                            <h3 className="title">{strings.JoeEducation}</h3>
                            <span className="post">{strings.JoePosition}</span>
                        </div>
                    </div>

                    {/* Jesssica */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic4} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">{strings.JessicaCassidy}</h3>
                            <h3 className="title">{strings.JessicaEducation}</h3>
                            <span className="post">{strings.JessicaPosition}</span>
                        </div>
                    </div>
                </div>
            </body>
        </AboutUsContainer>
);
}

export default AboutUsComponent;
const AboutUsContainer = styled.nav`
${'' /* Put your css here buddy */}

`
