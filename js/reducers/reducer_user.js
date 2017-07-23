import { GENERATE_USER_INFO } from '../constants'
const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_USER_INFO:
      return action.payload
    default:
      return state
  }
}
