import {enqueue} from '../helpers/Queue'

import { CREATE_WIDGET, ADD_TO_QUEUE } from '../constants/index'
const INITIAL_STATE = { widgets: [], widgetQueue: []}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case ADD_TO_QUEUE:
      const newState = enqueue(state, action)
      return newState
    case CREATE_WIDGET:
      return { ...state, widgets: [...state.widgets, action.payload] }
    default:
      return state
  }
}
