import { combineReducers } from 'redux'
import WidgetQueue from './reducer_queue'

const rootReducer = combineReducers({
  widgetQueue: WidgetQueue
})

export default rootReducer
