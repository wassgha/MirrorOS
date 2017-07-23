import {LOAD_WEATHER} from '../constants/index'
const INITIAL_STATE = {
  currentWeather: {
    sys: {},
    main: {},
    weather: [{}]
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_WEATHER:
      return { ...state, currentWeather: action.payload.data }
    default:
      return state
  }
}
