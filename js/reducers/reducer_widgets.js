import {enqueue} from '../helpers/Queue'

import { CREATE_WIDGET, ADD_TO_QUEUE } from '../constants/index'
const INITIAL_STATE = { widgetList: [], widgetQueue: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return enqueue(state, action)
    case CREATE_WIDGET:
      return { ...state, widgetList: [...state.widgetList, action.payload] }
    default:
      return state
  }
}
