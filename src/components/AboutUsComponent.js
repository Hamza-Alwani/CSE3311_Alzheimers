import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 
import '../css/aboutUs.css'; 

import pic1 from '../pictures/mem4.jpg';
import pic2 from '../pictures/mem2.jpg';
import pic3 from '../pictures/mem3.jpg';
import pic4 from '../pictures/mem1.jpg';


function AboutUsComponent() {
    return (
        <AboutUsContainer>
            <body>
                <h1>MEET OUR TEAM</h1>
                <div className="container">
                    {/* Dr. Lee */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic1} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Kathy Lee</h3>
                            <h3 className="title">PhD, MSW</h3>
                            <span className="post">Principle Investigator, Assistant Professor, School of Social Work, University of Texas at Arlington.</span>
                        </div>
                        {/* intro? */}
                    </div>

                    {/* Dr. Seo */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic2} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Chang Hyun Seo</h3>
                            <h3 className="title">PhD, MSW</h3>
                            <span className="post">Program Coordinator, Research Associate, School of Social Work, University of Texas at Arlington.</span>
                        </div>
                    </div>
                    
                    {/* Joe */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic3} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Joe Zhao</h3>
                            <h3 className="title">MSW</h3>
                            <span className="post">Research Assistant (Chinese), Graduate College of Social Work, University of Houston.</span>
                        </div>
                    </div>

                    {/* Jesssica */}
                    <div className="our-team">
                        <div className="pic">
                            <img src={pic4} alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Jessica Cassidy</h3>
                            <h3 className="title">MSW</h3>
                            <span className="post">Research Assistant (English), PhD student, School of Social Work, University of Texas at Arlington. </span>
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
