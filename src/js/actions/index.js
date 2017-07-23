/* global $, io */

import axios from 'axios'
import {applyWidgetFeatures} from '../helpers/Widget'
import {nowToString} from '../helpers/DateTime'

import {
        ADD_TO_QUEUE, CREATE_WIDGET, GENERATE_SOCKET,
        GOOGLE_GEOCODING_ADDRESS, GOOGLE_API_KEY,
        UPDATE_DATE_AND_TIME, LOAD_WEATHER,
        OPEN_WEATHER_MAP_ADDRESS, OPEN_WEATHER_MAP_KEY,
        LOAD_POSITION, LOAD_FORMATTED_ADDRESS
      } from '../constants/index'

export function addToQueue (widget) {
  return {
    type: ADD_TO_QUEUE,
    payload: widget
  }
}

export function createWidget (props, elementId, config) {
  const { widgetQueue } = props
  const widgetElement = $('#' + elementId)

  const widget = {
    widgetElement: widgetElement,
    widgetQueue: widgetQueue,
    config: config
  }

  applyWidgetFeatures(widget, props.addToQueue)

  return {
    type: CREATE_WIDGET,
    payload: widget
  }
}

export function updateDateAndTime () {
  const now = nowToString(true)

  return {
    type: UPDATE_DATE_AND_TIME,
    payload: now
  }
}

export function loadWeather (weather) {
  return {
    type: LOAD_WEATHER,
    payload: weather
  }
}

export function loadPosition (position) {
  return {
    type: LOAD_POSITION,
    payload: position
  }
}

export function loadFormattedAddress (response) {
  return {
    type: LOAD_FORMATTED_ADDRESS,
    payload: response
  }
}

export function updateWeather () {
  return function (dispatch, getState) {
    const { location: { currentLocation } } = getState()

    axios.get(OPEN_WEATHER_MAP_ADDRESS, {
      params: {
        lat: currentLocation.coords.latitude,
        lon: currentLocation.coords.longitude,
        appid: OPEN_WEATHER_MAP_KEY
      }
    }).then((weather) => dispatch(loadWeather(weather)), (error) => { console.log(error) })
  }
}

export function generateLocation () {
  return function (dispatch, getState) {
    new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    .then((position) => {
      dispatch(loadPosition(position))
      axios.get(GOOGLE_GEOCODING_ADDRESS, {
        params: {
          latlng: position.coords.latitude + ',' + position.coords.longitude,
          key: GOOGLE_API_KEY,
          result_type: 'country|administrative_area_level_1'
        }
      }).then(response => {
        dispatch(loadFormattedAddress(response))
        dispatch(updateWeather())
      }, (error) => { console.log(error) })
    }, (error) => console.log(error))
  }
}

export function generateSocket () {
  const socket = io.connect('http://localhost:3000')

  return {
    type: GENERATE_SOCKET,
    payload: socket
  }
}
