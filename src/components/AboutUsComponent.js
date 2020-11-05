import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// css
import '../css/main.css'; 
import '../css/aboutUs.css'; 

function AboutUsComponent() {
    return (
<body>
    <h1>MEET OUR TEAM</h1>
    <div class="container">
        {/* Dr. Lee */}
        <div class="our-team">
            <div class="pic">
                <img src="../pictures/mem4.jpg" alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Kathy Lee, PhD, MSW</h3>
                <span class="post">Assistant Professor, School of Social Work, University of Texas at Arlington.</span>
            </div>
            {/* intro? */}
        </div>

        {/* Dr. Seo */}
        <div class="our-team">
            <div class="pic">
                <img src="../pictures/mem2.jpg" alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Chang Hyun Seo, PhD, MSW</h3>
                <span class="post">School of Social Work, University of Texas at Arlington.</span>
            </div>
        </div>
        
        {/* Joe */}
        <div class="our-team">
            <div class="pic">
                <img src="../pictures/mem3.jpg" alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Joe Zhao, MSW           </h3>
                <span class="post">Graduate College of Social Work, University of Houston.</span>
            </div>
        </div>

        {/* Jesssica */}
        <div class="our-team">
            <div class="pic">
                <img src="../pictures/mem1.jpg" alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Jessica Cassidy, MSW</h3>
                <span class="post">PhD student, School of Social Work, University of Texas at Arlington. </span>
            </div>
        </div>
    </div>
</body>
);
}

export default AboutUsComponent;
