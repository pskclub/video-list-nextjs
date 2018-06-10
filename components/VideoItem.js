import React from 'react'
import styled from 'styled-components'
import { withState } from 'recompose'
import VideoModal from './VideoModal'

const Wrapper = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  .card {
    height: 100%;
    .card-img-top {
      height: 200px;
    }
    h6{
        font-size: 0.8rem;
    }
  }
`

const VideoItems = ({data, setModal, isModal}) => {
  const {snippet, id} = data
  return (
    <Wrapper className="col-sm-4">
      <div className="card" onClick={() => setModal(true)}>
        <img className="card-img-top" src={snippet.thumbnails.medium.url} alt={snippet.title}/>
        <div className="card-body">
          <h6>{snippet.title}</h6>
        </div>
      </div>
      <VideoModal title={snippet.title} desc={snippet.description} videoId={id.videoId} isShow={isModal}
                  onClose={() => setModal(false)}/>
    </Wrapper>
  )
}

const enhance = withState('isModal', 'setModal', false)

export default enhance(VideoItems)
