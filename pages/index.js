import React from 'react'
import VideoList from '../features/VideoList/index'
import { fetchVideos } from '../reducers/videosReducer'

class Main extends React.Component {
  static async getInitialProps ({store, isServer}) {
    await store.dispatch(fetchVideos())
    return {isServer}
  }

  render () {
    return <VideoList/>
  }
}

export default Main
