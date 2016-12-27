import React from 'react'

const Player = React.createClass({

  componentDidMount: function(){
    const {widgetQueue, elementId, widgetId, draggable} = this.props
    const widget = $("#" + elementId)

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
      <div className="widget video" id={this.props.elementId}>
        <video src="../media/videos/big_buck_bunny.mp4" controls loop autoPlay muted></video>
      </div>
    )
  }
})


export default Player
