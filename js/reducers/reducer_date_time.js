import { INITIALIZE_DATE_AND_TIME, UPDATE_DATE_AND_TIME } from '../constants/index'
const INITIAL_STATE = { dateAndTime: null }

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case INITIALIZE_DATE_AND_TIME:
      return { ...state, dateAndTime: action.payload }
    case UPDATE_DATE_AND_TIME:
      return { ...state, dateAndTime: action.payload }
    default:
      return state
  }
}
