/**
 * Copyright 2017 The MirrorOS Authors. All Rights Reserved.
 *
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://github.com/wassgha/MirrorOS/blob/master/LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from '../styles/DateTimeWeather.scss';
import { generateLocation } from '../actions/location';

import weatherIcons from '../const/weather-icons.json';
import { OPEN_WEATHER_MAP_KEY,
         OPEN_WEATHER_MAP_ADDRESS } from '../const';

@CSSModules(styles)

class DateTimeWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      weather: {},
      formattedAddress: '',
    };
  }

  // Component methods

  componentDidMount () {
    // Update Date & Time Every Seconds
    this.tickTimer_ = setInterval(() => {
      this.tick()
    }, 1000)
    // Update Weather Every 5 Hours
    this.props.generateLocation()
    setInterval(() => {
      this.updateWeather()
    }, 18000000)
  }

  componentWillReceiveProps(nextProps) {
    // Update weather when location changes
    const curLocation = this.props.location;
    if(JSON.stringify(curLocation) !== JSON.stringify(nextProps.location))
    {
      this.updateWeather();
    }
  }


  componentWillUnmount() {
    clearInterval(this.tickTimer_);
  }

  render () {
    const now = Object.assign({}, this.dateString(), this.timeString(true));
    const timeStr = now.hrs + ':' + now.mins + ':' + now.secs + ' ' + now.ampm
    const dateStr = now.day + ', ' + now.month + ' ' + now.date
    const weather = this.getWeather()

    return (
      <span className={styles.dateTimeWeather}>
        <span className={styles.date}>{dateStr}</span>
        <br />
        <span className={styles.time}>{timeStr}</span>
        <br />
        <span className={styles.weather}>
        {
          weather ? (
            <span>
              <i className={weather.icon} />{weather.condition}
            </span>
          ) : (
            <span>
              Loading Weather
            </span>
          )
        }
        </span>
      </span>
    )
  }
  // Weather Methods

  updateWeather() {
    if (!this.props.location.currentLocation
        || !this.props.location.currentLocation.coords) {
      return;
    }
    axios.get(OPEN_WEATHER_MAP_ADDRESS, {
      params: {
        lat: this.props.location.currentLocation.coords.latitude,
        lon: this.props.location.currentLocation.coords.longitude,
        appid: OPEN_WEATHER_MAP_KEY
      }
    }).then((weather) => {
      this.setState({
        weather: weather.data
      })
    }, (error) => { console.log(error) })
  }

  getWeather() {
    if (!this.state.weather.main) {
      return;
    }
    const weatherObj = this.state.weather
    const celsius = (weatherObj.main.temp - 273.15).toFixed(0)
    const condition = weatherObj.weather[0].description
    const prefix = 'wi wi-'
    const code = weatherObj.weather[0].id
    let icon = code !== undefined ? weatherIcons[code].icon : ''

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon
    }

    // Finally tack on the prefix.
    icon = prefix + icon
    return {
      icon,
      condition
    };
  }

  // Date & Time Methods

  dateString() {
    // Split Date.toDateString and get following array:
    // [<day>, <month>, <date>, <year>]
    const str = this.state.date.toDateString().split(' ');
    return {
      day: str[0],
      month: str[1],
      date: str[2],
      year: str[3]
    };
  }

  timeString(ampm) {
    // Splits Date.toTimeString and get following array:
    // [<hours>, <minutes>, <seconds>, <am/pm>]
    let str = this.state.date.toTimeString().split(':')
    str[3] = 'AM';

    const hours = Number(str[0]);
    if (ampm && hours > 12) {
      str[0] = (hours - 12 < 10) ? '0' + (hours - 12) : '' + (hours - 12);
      str[3] = 'PM';
    }

    return {
      hrs: str[0],
      mins: str[1],
      secs: str[2].split(' ')[0],
      ampm: str[3]
    };
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }
}

DateTimeWeather.propTypes = {
  location: React.PropTypes.object,
  generateLocation: React.PropTypes.func,
  // dateAndTime: React.PropTypes.any,
  // weather: React.PropTypes.any,
  // formattedAddress: React.PropTypes.string
}

function mapStateToProps (state) {
  return {
    location: state.location,
    // dateAndTime: state.dateAndTime,
    // weather: state.weather.currentWeather,
    // widgetList: state.widgets.widgetList,
    // formattedAddress: state.location.formattedAddress
  }
}

export default connect(mapStateToProps, {  generateLocation })(DateTimeWeather)
