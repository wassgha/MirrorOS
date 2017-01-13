import { combineReducers } from 'redux'

import Widgets from './reducer_widgets'
import DateAndTime from './reducer_date_time'

const rootReducer = combineReducers({
  widgets: Widgets,
  dateAndTime: DateAndTime
})

export default rootReducer
