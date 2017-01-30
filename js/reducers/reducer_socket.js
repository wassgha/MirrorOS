import { GENERATE_SOCKET } from '../constants/index'
const INITIAL_STATE = null

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_SOCKET:
      return action.payload
    default:
      return state
  }
}
