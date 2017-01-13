import axios from 'axios'
import {applyWidgetFeatures} from '../helpers/Widget'

import {
        ADD_TO_QUEUE, REMOVE_FROM_QUEUE,
        CREATE_WIDGET, REMOVE_WIDGET, INITIALIZE_DATE_AND_TIME,
        UPDATE_DATE_AND_TIME
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

export function initializeDateAndTime(){
  const dateAndTime = new DateTime()

  return {
    type: INITIALIZE_DATE_AND_TIME,
    payload: dateAndTime
  }
}

export function updateDateAndTime(){
  const now = new Date()

  return {
    type: UPDATE_DATE_AND_TIME,
    payload: now
  }
}
