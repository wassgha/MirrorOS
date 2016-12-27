import React from 'react'
import Widgets from './widgets/all'

const Widget = React.createClass({

  componentDidMount: function(){
    const {widgetQueue, widgetId, draggable, elementId} = this.props
    const widget = $("#" + elementId)
    console.log(Widgets[widgetId];

    widgetQueue.enqueue(widget)
    if(draggable){
      $(widget).on('click', function(event){
        widgetQueue.enqueue(widget)
        console.log(widgetQueue);
      }).draggable({
        start: function(event, ui){
          widgetQueue.enqueue(widget)
        }
      })
    }

  },

  render: function(){
    return (
      <div id={this.props.elementId}>
        {Widget[this.props.widgetId]}
      </div>
    )
  }
})


export default Widget
