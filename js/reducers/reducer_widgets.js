import { INITIALIZE_QUEUE, CREATE_WIDGET } from '../constants/index'
const INITIAL_STATE = { widgets: [], widgetQueue: null}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case INITIALIZE_QUEUE:
      return { ...state, widgetQueue: action.payload }
    case CREATE_WIDGET:
      console.log(state)
      return { ...state, widgets: [...state.widgets, action.payload] }
    default:
      return state
  }
}
