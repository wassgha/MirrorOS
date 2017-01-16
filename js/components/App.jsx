import React, { Component } from 'react'
import { connect } from 'react-redux'

import {updateDateAndTime, updateWeather} from '../actions/index'

class App extends Component {

  componentWillMount () {
    this.props.updateDateAndTime()
    this.props.updateWeather()

    setInterval(() => {
      this.props.updateDateAndTime()
    }, 1000)

    setInterval(() => {
      this.props.updateWeather()
    }, 1800000)
  }

  render () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, {updateDateAndTime, updateWeather})(App)
