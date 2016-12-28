import React from 'react'
import ReactDOM from 'react-dom'

import Queue from './helpers/queue'
import Home from './home'

import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'

const App = React.createClass({

  componentWillMount () {
    this.widgetQueue = new Queue()
  },

  render () {
    return (
      <div className='app-container'>
        <Home widgetQueue={this.widgetQueue} />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
