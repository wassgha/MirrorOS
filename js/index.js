import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, hashHistory } from 'react-router'
import reducers from './reducers'
import routes from './routes'
import promise from 'redux-promise'

import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('#app')
)
