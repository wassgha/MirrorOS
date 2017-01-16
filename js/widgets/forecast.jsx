/* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget} from '../actions/index'

class Forecast extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.props.createWidget(this.props, {})
  }

  render () {
    const now = this.props.dateAndTime.now
    const timeStr = now.day + ' ' + now.hours + ':' + now.minutes + ' ' + now.ampm
    const dateStr = now.date + ' ' + now.month + ' ' + now.year

    const weather = this.props.weather
    const town = weather.name
    const country = weather.sys.country
    const celsius = weather.main.temp - 273.15


    return (
      <span className='corner' id={this.props.elementId}>
        <span id='date'>{dateStr}</span>
        <br />
        <span id='time'>{timeStr}</span>
        <br />
        <span id='weather'>{celsius}° C / {town},{country}</span>
      </span>
    )
  }
}

Forecast.propTypes = {
  elementId: React.PropTypes.string.isRequired,
  draggable: React.PropTypes.any
}

function mapStateToProps(state){
  return {
    widgetQueue: state.widgets.widgetQueue,
    dateAndTime: state.dateAndTime,
    weather: state.weather.currentWeather
  }
}

export default connect(mapStateToProps, {createWidget})(Forecast)
