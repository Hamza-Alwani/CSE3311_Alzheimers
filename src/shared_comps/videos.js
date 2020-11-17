/// summary
///
///	Article_xx  
/// - A template that will be useed by DisplayArticle_XX to create card like information
///
/// summary



import React from 'react';
import ReactPlayer from 'react-player';

import styled from 'styled-components';
import '../css/video.css'; 

function Article( {props} ) {
    return (
    <div className="center">
      <h3>{props.title}</h3>
      <ReactPlayer
        url={props.url}
      />         
    </div>
               
          
    );
}

export default Article;

