import React from 'react'
import ReactDOM from 'react-dom'

import Message from './widgets/message'
import Forecast from './widgets/forecast'
import Player from './widgets/player'


const Home = React.createClass({

  componentDidMount: function(){

  },

  render: function(){
    return (
      <div>
        <Forecast widgetQueue={this.props.widgetQueue} elementId="0001" />
        <Player widgetQueue={this.props.widgetQueue} elementId="0002" draggable/>
        <Message widgetQueue={this.props.widgetQueue} elementId="0003" draggable/>
        <Message widgetQueue={this.props.widgetQueue} elementId="0004" draggable/>
      </div>
    )
  }
})

export default Home
