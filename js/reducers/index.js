import { combineReducers } from 'redux'

import Widgets from './reducer_widgets'
import DateAndTime from './reducer_date_time'
import Weather from './reducer_weather'
import Location from './reducer_location'
import SocketIO from './reducer_socket'

const rootReducer = combineReducers({
  widgets: Widgets,
  dateAndTime: DateAndTime,
  weather: Weather,
  location: Location,
  socket: SocketIO
})

export default rootReducer
