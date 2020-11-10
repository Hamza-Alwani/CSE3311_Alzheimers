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
    <h2>WEB DEVELOPERS</h2>
    <div class="container">
        <div class="us">
            <div class="pic">
                <img src={pic1} alt=""/>
            </div>
            <div class="us-content">
                <h4 class="usTitle">Hamza Alwani</h4>
            </div>
            {/* intro? */}
        </div>

        
        <div class="us">
            <div class="pic">
                <img src={pic2} alt=""/>
            </div>
            <div class="us-content">
                <h4 class="usTitle">Arman Bhandari</h4>
            </div>
        </div>
        
        
        <div class="us">
            <div class="pic">
                <img src={pic3} alt=""/>
            </div>
            <div class="us-content">
                <h4 class="usTitle">Henry Tang</h4>
            </div>
        </div>

        
        <div class="us">
            <div class="pic">
                <img src={pic4} alt=""/>
            </div>
            <div class="us-content">
                <h4 class="usTitle">Thy Tran</h4>
            </div>
        </div>
    </div>
</body>
);
}

export default CoolBeansComponent;
