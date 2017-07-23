import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './js/pages/App'
import Home from './js/pages/Home'
import Login from './js/pages/Login'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='/home' component={Home} />
  </Route>
)
