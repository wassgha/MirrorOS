import {UPDATE_WEATHER} from '../constants/index'
const INITIAL_STATE = { currentWeather: {
                          sys:{},
                          main: {}
                        }
                      }

export default function(state = INITIAL_STATE, action){
  switch (action.type){
    case UPDATE_WEATHER:
      return { ...state, currentWeather: action.payload.data}
    default:
      return state
  }
}
