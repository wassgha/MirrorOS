import React, { Component } from 'react'
import { connect } from 'react-redux'

import { initializeQueue } from '../actions/index'
import Home from './Home'

class App extends Component {

  constructor(props){
    super(props)

    this.props.initializeQueue()
  }

  render () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, {initializeQueue})(App)
