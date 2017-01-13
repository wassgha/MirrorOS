import axios from 'axios'
import Queue from '../helpers/Queue'
import Widget from '../helpers/Widget'

import {
        INITIALIZE_QUEUE, ADD_TO_QUEUE, REMOVE_FROM_QUEUE,
        CREATE_WIDGET, REMOVE_WIDGET, INITIALIZE_DATE_AND_TIME,
        UPDATE_DATE_AND_TIME
      } from '../constants/index'


export function initializeQueue(){
  const widgetQueue = new Queue()

  return {
    type: INITIALIZE_QUEUE,
    payload: widgetQueue
  }
}

export function addToQueue(){

  return {
    type: ADD_TO_QUEUE,
    payload: {}
  }
}

export function createWidget(props, params){
  const {widgetQueue, elementId, draggable} = props
  const widgetElement = $('#' + elementId)

  const widget = new Widget(widgetElement, widgetQueue, params).create()

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
