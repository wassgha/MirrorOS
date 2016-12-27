import React from 'react'

const Message = React.createClass({

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
      <div className="widget message" id={this.props.elementId}>
        <div className="content">
          <div className="head">
            <img src="../media/images/bulk-profile-image-01.jpg"/>
            <div className="desc"><span className="title">Enya Brennan</span>
            <span className="time">7:51 PM</span></div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="actions">
          <a href="#" className="action">Cancel</a>
          <a href="#" className="action highlight">Reply</a>
        </div>
      </div>
    )
  }
})


export default Message
