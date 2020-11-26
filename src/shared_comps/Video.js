/// summary
///
///	Video  
/// - A template that will be useed by DisplayVids to create card like information
///
/// summary



import React from 'react';
import ReactPlayer from 'react-player';

// css
import styled from 'styled-components';

function Video( {props} ) {
    return (
      <VideoContainer>
        <div className="center">
          <h3>{props.title}</h3>
          <ReactPlayer
            url={props.url}
          />         
        </div>
      </VideoContainer>  
    );
}

export default Video;

const VideoContainer = styled.footer`

.center {
    display: block;
     margin-left: auto;
     margin-right: auto;
     width: 40em;
     height: auto;
     margin-top: 2em;
}
  

`