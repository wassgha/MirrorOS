import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget} from '../actions/index'

class RightCorner extends Component {

  render () {
    const now = this.props.dateAndTime.now
    const timeStr = now.hours + ':' + now.minutes + ' ' + now.ampm
    const dateStr = now.day + ', ' + now.month + ' ' + now.date

    const weatherObj = this.props.weather
    const celsius = (weatherObj.main.temp - 273.15).toFixed(0)
    const condition = weatherObj.weather[0].description
    const icon = weatherObj.weather.icon

    return (
      <span className='corner right'>
        <span id='date'>{dateStr}</span>
        <br />
        <span id='time'>{timeStr}</span>
        <br />
        <span id='weather'>{condition} Icon : {icon}</span>
      </span>
    )
  }
}

RightCorner.propTypes = {
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

export default connect(mapStateToProps, {createWidget})(RightCorner)
