/// summary
///
///	Video  
/// - A template that will be useed by DisplayVids to create card like information
///
/// summary


import { useState } from 'react';
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Modal from 'react-bootstrap/Modal'

// css
import styled from 'styled-components';
import '../css/article.css'

function Video( {props} ) {
    const [show, setShow] = useState(false);

    return (
      <VideoContainer>
        <div className="article-text-container"  onClick={() => setShow(true)}>
          <div className="article-image" >
            <ReactPlayer
              url={props.url}
              width="100%"
              height="100%"
            />      
            </div>
          <div className="flex-child">
              <div className="article-text-info">
                  <div className="article-title">{props.title}</div>
                  <div className="article-discription">{props.disc}</div>
                  <div className="text-date-posted">
                      {/* Posted November 8th, 2020 */}
                  </div>
              </div>
          </div>
        </div>

        <Modal
          show={show}
          size="lg"
          centered
          onHide={() => setShow(false)}
          // dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body 
          > 
            <ModalContainer>
              <div className="video-modal-body" >
                <ReactPlayer
                  url={props.url}
                  width="100%"
                  height="100%"
                  controls={true}
                />    
              </div>
            </ModalContainer>
          </Modal.Body>
        </Modal>
      </VideoContainer>  
    );
}

export default Video;
const ModalContainer = styled.div`

.video-modal-body
{
  height: 500px;
}

@media only screen and (max-width: 1000px) {
  .video-modal-body
  {
    height: 200px;
  }
}

`

const VideoContainer = styled.div`




`

