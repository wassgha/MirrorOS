import React from 'react'
import ReactDOM from 'react-dom'

import Queue from './helpers/queue'
import Home from './home'

import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'


const App = React.createClass({

  getInitialState: function(){
    this.widgetQueue = new Queue()

    return ({
      widgetQueue: this.widgetQueue
    })
  },

  componentDidMount: function(){

  },

  render: function(){
    return (
    	<div className="app-container">
    		<Home widgetQueue={this.widgetQueue}/>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
