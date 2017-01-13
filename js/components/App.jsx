import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'

class App extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
