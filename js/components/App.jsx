import React, { Component } from 'react'
import { connect } from 'react-redux'

import {updateDateAndTime, updateWeather, generateLocation} from '../actions/index'

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
  }

  render () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, {updateDateAndTime, updateWeather, generateLocation})(App)
