import React, { Component } from 'react'
import { connect } from 'react-redux'

import weatherIcons from '../constants/weather-icons'

class RightCorner extends Component {

  render () {
    console.log(weatherIcons)
    const now = this.props.dateAndTime.now
    const timeStr = now.hours + ':' + now.minutes + ':' + now.seconds + ' ' + now.ampm
    const dateStr = now.day + ', ' + now.month + ' ' + now.date

    const weatherObj = this.props.weather
    const celsius = (weatherObj.main.temp - 273.15).toFixed(0)
    const condition = weatherObj.weather[0].description
    const prefix = 'wi wi-'
    const code = weatherObj.weather[0].id
    console.log(code, weatherObj)
    let icon = code !== undefined ? weatherIcons[code].icon : ''

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon
    }

    // Finally tack on the prefix.
    icon = prefix + icon

    return (
      <span className='corner right'>
        <span id='date'>{dateStr}</span>
        <br />
        <span id='time'>{timeStr}</span>
        <br />
        <span id='weather'>
          <i className={icon} />{condition}
        </span>
      </span>
    )
  }
}

RightCorner.propTypes = {
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

export default connect(mapStateToProps)(RightCorner)
