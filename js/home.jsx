import React from 'react'

import Message from './widgets/message'
import Forecast from './widgets/forecast'
import Player from './widgets/player'

const Home = React.createClass({
  propTypes: {
    widgetQueue: React.PropTypes.object.isRequired
  },

  render () {
    const playerConfig = {
      controls: true,
      loop: true,
      autoPlay: true,
      muted: true
    }

    return (
      <div>
        <Forecast widgetQueue={this.props.widgetQueue} elementId='0001' />
        <Player widgetQueue={this.props.widgetQueue} elementId='0002' src='../media/videos/big_buck_bunny.mp4'
          config={playerConfig} draggable />
        <Message widgetQueue={this.props.widgetQueue} elementId='0003' draggable />
        <Message widgetQueue={this.props.widgetQueue} elementId='0004' draggable />
      </div>
    )
  }
})

export default Home
