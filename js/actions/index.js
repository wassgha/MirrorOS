import axios from 'axios'
import {applyWidgetFeatures} from '../helpers/Widget'
import {nowToString} from '../helpers/DateTime'

import {
        ADD_TO_QUEUE, REMOVE_FROM_QUEUE,
        CREATE_WIDGET, REMOVE_WIDGET,
        UPDATE_DATE_AND_TIME, UPDATE_WEATHER,
        OPEN_WEATHER_MAP_ADDRESS, OPEN_WEATHER_MAP_KEY
      } from '../constants/index'


export function addToQueue(widget){
  return {
    type: ADD_TO_QUEUE,
    payload: widget
  }
}

export function createWidget(props, config){
  const {widgetQueue, elementId, draggable} = props
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

export function updateDateAndTime(){
  const now = nowToString(true)

  return {
    type: UPDATE_DATE_AND_TIME,
    payload: now
  }
}

export function updateWeather(){
  const location = 'Tbilisi,ge'

  const request = axios.get(OPEN_WEATHER_MAP_ADDRESS, {
    params: {
      q: location,
      appid: OPEN_WEATHER_MAP_KEY
    }
  })

  return {
    type: UPDATE_WEATHER,
    payload: request
  }
}
