import { UPDATE_DATE_AND_TIME } from '../constants/index'
const INITIAL_STATE = { now: null }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_DATE_AND_TIME:
      return { ...state, now: action.payload }
    default:
      return state
  }
}
