import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; 
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const VideoModal = ({isShow, onClose, title, videoId, desc}) => {
  if (!isShow)
    return null
  return (
    <div className="modal" tabIndex={-1} role="dialog" style={{display: 'block'}}>
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <Wrapper>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0"
                      allow="autoplay; encrypted-media" allowFullScreen={true}/>
            </Wrapper>
            <p style={{marginTop: 15}}>{desc}</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default VideoModal
