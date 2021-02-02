import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 

// images


function CoolBeansComponent() {
    return (
        <AboutUsContainer>
            <body>
                <h2>WEB DEVELOPERS</h2>
                <div className="container">
                    <div className="us">
                        <div className="pic">
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fhamza.jpg?alt=media&token=e9f4ae15-f649-4708-bd19-12e5b70b8458" alt=""/>
                        </div>
                        <div className="us-content">
                            <h4 className="usTitle">Hamza Alwani</h4>
                        </div>
                        {/* intro? */}
                    </div>

                    
                    <div className="us">
                        <div className="pic">
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Farman.jpg?alt=media&token=aa978e2d-a6eb-4d47-a407-cf1504ab0827" alt=""/>
                        </div>
                        <div className="us-content">
                            <h4 className="usTitle">Arman Bhandari</h4>
                        </div>
                    </div>
                    
                    
                    <div className="us">
                        <div className="pic">
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fhenry.jpg?alt=media&token=c7b9d47c-2a31-4648-a685-f77669e39f63" alt=""/>
                        </div>
                        <div className="us-content">
                            <h4 className="usTitle">Henry Tang</h4>
                        </div>
                    </div>

                    
                    <div className="us">
                        <div className="pic">
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fthy.jpg?alt=media&token=c477aafe-c706-4e7e-8d83-4bdcf91e6f40" alt=""/>
                        </div>
                        <div className="us-content">
                            <h4 className="usTitle">Thy Tran</h4>
                        </div>
                    </div>
                </div>
            </body>
        </AboutUsContainer>
    );
}

export default CoolBeansComponent;


const AboutUsContainer = styled.nav`
${'' /* Put your css here buddy */}



H2 {
    text-align: center;
    color: black;
    font-size: 25px;
    font-style: bold;
    font-weight: bolder;
    margin-bottom: 23px;
    margin-top: 23px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
}

.us{
    background: #f7f5ec;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 20px 0 30px;
    margin: 10px 20px;
    width: 50%;
    }
    
.us .pic{
    display: inline-block;
    width: 130px;
    height: 130px;
    margin-bottom: 23px;
    z-index: 1;
    position: relative;
    }
    
.us .pic:before{
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background: #dd3928;
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.2;
    transform: scale(3);
    transition: all 0.3s linear 0s;
    }
    
.us:hover .pic:before {
    height: 100%; 
} 

.us .pic:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #dd3928;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    }

.us .pic img{
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
    }

.us:hover .pic img{
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
    }
    
.us .us-content { 
    margin-bottom: 30px; 
}

.us .usTitle{
    font-size: 22px;
    font-weight: 700;
    color: black;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-bottom: 5px;

    }
.us .post{
    display: block;
    font-size: 15px;
    color: black;
    text-transform:capitalize;
    }

    @media (max-width: 780px){
   .container {
       flex-direction: column;
   }

   .our-team {
       width: 80%;
       margin-top: 30px;
   }
}

`