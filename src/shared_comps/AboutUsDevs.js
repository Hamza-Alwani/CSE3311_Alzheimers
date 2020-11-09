import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// css
import '../css/main.css'; 
import '../css/coolBeans.css'; 

import pic1 from '../pictures/hamza.jpg';
import pic2 from '../pictures/arman.jpg';
import pic3 from '../pictures/henry.jpg';
import pic4 from '../pictures/thy.jpg';


function CoolBeansComponent() {
    return (
<body>
    <h3>WEB DEVELOPERS</h3>
    <div class="container">
        <div class="our-team">
            <div class="pic">
                <img src={pic1} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Hamza Alwani</h3>
            </div>
            {/* intro? */}
        </div>

        
        <div class="our-team">
            <div class="pic">
                <img src={pic2} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Arman Bhandari</h3>
            </div>
        </div>
        
        
        <div class="our-team">
            <div class="pic">
                <img src={pic3} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Henry Tang</h3>
            </div>
        </div>

        
        <div class="our-team">
            <div class="pic">
                <img src={pic4} alt=""/>
            </div>
            <div class="team-content">
                <h3 class="title">Thy Tran</h3>
            </div>
        </div>
    </div>
</body>
);
}

export default CoolBeansComponent;
