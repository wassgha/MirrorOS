import axios from 'axios'
import Queue from '../helpers/Queue'

export const INITIALIZE_QUEUE = 'INITIALIZE_QUEUE'
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const REMOVE_FROM_QUEUE = 'REMOVE_FROM_QUEUE'

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
