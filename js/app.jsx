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
    const widgets = document.getElementsByClassName('widget')
    const widgetQueue = this.widgetQueue
    Array.prototype.forEach.call(widgets, function(widget, index){
      widgetQueue.enqueue(widget)
      $(widget).on('click', function(event){
        widgetQueue.enqueue(widget)
        console.log(widgetQueue);
      })
      $(widget).draggable({
        start: function(event, ui){
          widgetQueue.enqueue(widget)
        }
      })
    })
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
