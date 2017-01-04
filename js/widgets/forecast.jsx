/* global $ */

import React from 'react'
import Widget from '../helpers/Widget'
import DateTime from '../helpers/DateTime'
import Weather from '../helpers/Weather'

const Forecast = React.createClass({

  propTypes: {
    widgetQueue: React.PropTypes.object.isRequired,
    elementId: React.PropTypes.string.isRequired,
    draggable: React.PropTypes.any
  },

  getInitialState () {
    this.dateTime = new DateTime()
    this.weather = new Weather()

    return {
      dateAndTime: this.dateTime.toString(true),
      currentWeather: this.weather.getWeather()
    }
  },

  componentDidMount () {
    const {widgetQueue, elementId, draggable} = this.props
    const widgetElement = $('#' + elementId)

    const widget = new Widget(widgetElement, widgetQueue, {
      draggable: draggable
    })

    widget.create()
    setInterval(function () {
      this.setState({ dateAndTime: this.dateTime.toString(true) })
    }.bind(this), 1000)
  },

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
})

export default Forecast
