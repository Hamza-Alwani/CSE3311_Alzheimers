import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../pictures/background.png';
import '../css/Article.css'; 


function Article() {

    return (
      
        <div className="container">
            <div className="pic">
                <img src={pic1} />
            </div>
            <div className="title">
                <a href="https://google.com" target="_blank">  learn about alzimers </a>
            </div>
            <div className="discription">
               <p> this is a discription for the thing  asdasd 
                </p>
            </div>
        </div>
         
            
        

     
    );
}


export default Article;