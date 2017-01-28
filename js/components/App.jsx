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

App.propTypes = {
  updateDateAndTime: React.PropTypes.func,
  updateWeather: React.PropTypes.func,
  generateLocation: React.PropTypes.func,
  children: React.PropTypes.array
}

export default connect(null, {updateDateAndTime, updateWeather, generateLocation})(App)
