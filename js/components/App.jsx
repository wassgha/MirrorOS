import React, { Component } from 'react'
import { connect } from 'react-redux'

import {updateDateAndTime, updateWeather, generateLocation, generateSocket} from '../actions/index'

class App extends Component {

  componentWillMount () {
    this.props.updateDateAndTime()

    setInterval(() => {
      this.props.updateDateAndTime()
    }, 1000)

    setInterval(() => {
      this.props.updateWeather()
    }, 1800000)

    this.props.generateLocation()
    this.props.generateSocket()
  }

  render () {
    return (
      <div className='app-container'>
        {this.props.children}
        <div className='notification'>
          <span id='text'>Good Morning, Wassim.</span>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  updateDateAndTime: React.PropTypes.func,
  updateWeather: React.PropTypes.func,
  generateLocation: React.PropTypes.func,
  generateSocket: React.PropTypes.func,
  children: React.PropTypes.any
}

export default connect(null, {updateDateAndTime, updateWeather, generateLocation, generateSocket})(App)
