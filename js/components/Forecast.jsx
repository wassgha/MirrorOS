import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget} from '../actions/index'

class Forecast extends Component {

  render () {
    const now = this.props.dateAndTime.now
    const timeStr = now.day + ' ' + now.hours + ':' + now.minutes + ' ' + now.ampm
    const dateStr = now.date + ' ' + now.month + ' ' + now.year

    const weather = this.props.weather
    const celsius = (weather.main.temp - 273.15).toFixed(0)

    return (
      <span className='corner right'>
        <span id='date'>{dateStr}</span>
        <br />
        <span id='time'>{timeStr}</span>
        <br />
        <span id='weather'>{celsius}° C / {this.props.formattedAddress}</span>
      </span>
    )
  }
}

Forecast.propTypes = {
  draggable: React.PropTypes.any,
  createWidget: React.PropTypes.func,
  dateAndTime: React.PropTypes.any,
  weather: React.PropTypes.any,
  formattedAddress: React.PropTypes.string
}

function mapStateToProps (state) {
  return {
    widgetQueue: state.widgets.widgetQueue,
    dateAndTime: state.dateAndTime,
    weather: state.weather.currentWeather,
    widgetList: state.widgets.widgetList,
    formattedAddress: state.location.formattedAddress
  }
}

export default connect(mapStateToProps, {createWidget})(Forecast)
