import { INITIALIZE_QUEUE } from '../actions/index'
const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case INITIALIZE_QUEUE:
      return { ...state, widgetQueue: action.payload}
    default:
      return state
  }
}
