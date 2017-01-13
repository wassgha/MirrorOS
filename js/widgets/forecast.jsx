/* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import DateTime from '../helpers/DateTime'
import Weather from '../helpers/Weather'

import {createWidget, initializeDateAndTime} from '../actions/index'

class Forecast extends Component{

  constructor(props){
    super(props)

    this.dateTime = new DateTime()
    this.weather = new Weather()

    this.state = {
      dateAndTime: this.dateTime.toString(true),
      currentWeather: this.weather.getWeather()
    }
  }


  componentDidMount () {
    this.props.createWidget(this.props, {})

    setInterval(function () {
      this.setState({ dateAndTime: this.dateTime.toString(true) })
    }.bind(this), 1000)
  }

  render () {
    const now = this.state.dateAndTime
    const timeStr = now.day + ' ' + now.hours + ':' + now.minutes + ' ' + now.ampm
    const dateStr = now.date + ' ' + now.month + ' ' + now.year

    return (
      <span className='corner' id={this.props.elementId}>
        <span id='date'>{dateStr}</span>
        <br />
        <span id='time'>{timeStr}</span>
        <br />
        <span id='weather'>{this.state.currentWeather}</span>
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
    dateAndTime: state.dateAndTime
  }
}

export default connect(mapStateToProps, {createWidget, initializeDateAndTime})(Forecast)
