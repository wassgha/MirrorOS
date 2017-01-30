import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './pages/App'
import Home from './pages/Home'
import Login from './pages/Login'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='/home' component={Home} />
  </Route>
)
