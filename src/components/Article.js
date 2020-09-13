import React from 'react';
import pic1 from '../pictures/background.png';

// css
import '../css/Article.css'; 


function Article() {

    return (
      
        <div className="container">

            <div className="pic">
                <img src={pic1} alt="pic of lady"/>
            </div>

            <div className="title">
                <a href="https://google.com" target="_blank"  rel="noopener noreferrer">  learn about alzimers </a>
            </div>

            <div className="discription">
               <p> this is a discription for the thing asdasd</p>
            </div>

        </div>
         
            
        

     
    );
}


export default Article;