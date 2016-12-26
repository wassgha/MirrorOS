import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home.jsx'

import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'



const App = React.createClass({
  componentDidMount: () => {
    // should clean and load with each widget instead of taking list
    // and adding to each at the same time
    let currentZIndex = 3
    $('.widget').draggable({
      start: function(event, ui) {
		     $(this).css("z-index", currentZIndex++);
		  }
    })
  },

  render: () => {
    return (
    	<div className="app-container">
    		<Home />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
