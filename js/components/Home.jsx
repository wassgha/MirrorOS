import React, { Component } from 'react'
import { connect } from 'react-redux'

import Message from '../widgets/Message'
import Forecast from '../widgets/Forecast'
import VideoPlayer from '../widgets/VideoPlayer'
import AudioPlayer from '../widgets/AudioPlayer'

class Home extends Component {

  render () {
    const videoPlayerConfig = {
      controls: true,
      loop: true,
      muted: true
    }

    const audioPlayerConfig = {
      controls: true,
      loop: true,
      muted: true
    }

    return (
      <div>
        <Forecast />
        <VideoPlayer src='../media/video/big_buck_bunny.mp4'
          config={videoPlayerConfig} draggable />
        <AudioPlayer src='../media/audio/Find_Me.mp3'
          config={audioPlayerConfig} draggable />
        <Message draggable />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    widgetQueue: state.widgets.widgetQueue
  }
}

export default connect(mapStateToProps)(Home)
