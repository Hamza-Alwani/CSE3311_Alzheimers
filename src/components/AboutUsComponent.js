import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// css
import '../css/main.css'; 
import '../css/aboutUs.css'; 

import pic1 from '../pictures/mem4.jpg';
import pic2 from '../pictures/mem2.jpg';
import pic3 from '../pictures/mem3.jpg';
import pic4 from '../pictures/mem1.jpg';


function AboutUsComponent() {
    return (
<body>
    <h1>MEET OUR TEAM</h1>
    <div class="container">
        {/* Dr. Lee */}
        <div class="our-team">
            <div class="pic">
                <img src={pic1} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Kathy Lee</h3>
                <h3 class="title">PhD, MSW</h3>
                <span class="post">Program Coordinator, Assistant Professor, School of Social Work, University of Texas at Arlington.</span>
            </div>
            {/* intro? */}
        </div>

        {/* Dr. Seo */}
        <div class="our-team">
            <div class="pic">
                <img src={pic2} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Chang Hyun Seo</h3>
                <h3 class="title">PhD, MSW</h3>
                <span class="post">School of Social Work, University of Texas at Arlington.</span>
            </div>
        </div>
        
        {/* Joe */}
        <div class="our-team">
            <div class="pic">
                <img src={pic3} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Joe Zhao</h3>
                <h3 class="title">MSW</h3>
                <span class="post">Research Assistant, Graduate College of Social Work, University of Houston.</span>
            </div>
        </div>

        {/* Jesssica */}
        <div class="our-team">
            <div class="pic">
                <img src={pic4} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Jessica Cassidy</h3>
                <h3 class="title">MSW</h3>
                <span class="post">Research Assistant, PhD student, School of Social Work, University of Texas at Arlington. </span>
            </div>
        </div>
    </div>
</body>
);
}

export default AboutUsComponent;
