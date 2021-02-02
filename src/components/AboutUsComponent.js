import React from 'react';
import styled from 'styled-components'

// css
import '../css/main.css'; 

/*import pic1 from '../pictures/mem4.jpg';
import pic2 from '../pictures/mem2.jpg';
import pic3 from '../pictures/mem3.jpg';
import pic4 from '../pictures/mem1.jpg';
*/
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fmem4.jpg?alt=media&token=6543d278-be86-40b0-9b86-5e4b3b013a0c" alt=""/>
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fmem2.jpg?alt=media&token=9e2c8943-a718-44d5-801a-8e4e7b715bd2" alt=""/>
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fmem3.jpg?alt=media&token=4eb33a7e-0d37-4e90-8d5c-2d4a967a738b" alt=""/>
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/alzheimers-f3255.appspot.com/o/BackEndImages%2Fmem1.jpg?alt=media&token=b9be7463-69fd-4d69-a975-33ff0f7572ac" alt=""/>
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


H1 {
    text-align: center;
    color: black;
    font-size: 45px;
    font-style: bold;
    font-weight: bolder;
    margin-bottom: 23px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
}

.our-team{
    background: #f7f5ec;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 20px 0 30px;
    margin: 10px 20px;
    width: 50%;
    }
    
.our-team .pic{
    display: inline-block;
    width: 130px;
    height: 130px;
    margin-bottom: 23px;
    z-index: 1;
    position: relative;
    }
    
.our-team .pic:before{
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
    
.our-team:hover .pic:before {
    height: 100%; 
} 

.our-team .pic:after {
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

.our-team .pic img{
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
    }

.our-team:hover .pic img{
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
    }
    
.our-team .team-content { 
    margin-bottom: 30px; 
}

.our-team .title{
    font-size: 22px;
    font-weight: 700;
    color: black;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-bottom: 0px;
    }
.our-team .post{
    display: block;
    font-size: 15px;
    color: black;
    text-transform:capitalize;
    margin-top: 18px;
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
