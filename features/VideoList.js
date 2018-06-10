import React from 'react'
import { connect } from 'react-redux'
import VideoItem from '../components/VideoItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
  .row.equal {
    padding: 15px;
  }
`

const VideoList = ({videos}) => {
  return (
    <Wrapper className='container'>
      <h1 className="text-center">Video list</h1>
      <div className="row equal">
        {videos.isError && (<div>
          Something went wrong
        </div>)}
        {videos.isSuccess && videos.data.map((v, i) => <VideoItem key={i} data={v}/>)}
      </div>
    </Wrapper>
  )
}

const mapStateToProps = ({videos}) => ({videos})

export default connect(mapStateToProps)(VideoList)
