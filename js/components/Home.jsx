import React, { Component } from 'react'
import { connect } from 'react-redux'

import Message from '../widgets/Message'
import Forecast from '../widgets/Forecast'
import Player from '../widgets/Player'

class Home extends Component {

  constructor(props){
    super(props)
  }

  render () {
    const playerConfig = {
      controls: true,
      loop: true,
      muted: true
    }

    return (
      <div>
        <Forecast elementId='0001' />
        <Player elementId='0002' src='../media/videos/big_buck_bunny.mp4'
          config={playerConfig} draggable />
        <Message elementId='0003' draggable />
        <Message elementId='0004' draggable />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { widgetQueue: state.widgets.widgetQueue}
}

export default connect(mapStateToProps)(Home)
