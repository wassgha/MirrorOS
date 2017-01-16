import { combineReducers } from 'redux'

import Widgets from './reducer_widgets'
import DateAndTime from './reducer_date_time'
import Weather from './reducer_weather'

const rootReducer = combineReducers({
  widgets: Widgets,
  dateAndTime: DateAndTime,
  weather: Weather
})

export default rootReducer
