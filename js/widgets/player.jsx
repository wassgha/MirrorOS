/* globals $ */

import React from 'react'

const Player = React.createClass({

  propTypes: {
    widgetQueue: React.PropTypes.object.isRequired,
    elementId: React.PropTypes.string.isRequired,
    draggable: React.PropTypes.any,
    src: React.PropTypes.string.isRequired,
    config: React.PropTypes.object
  },

  componentDidMount () {
    const {widgetQueue, elementId, draggable} = this.props
    const widget = $('#' + elementId)

    widgetQueue.enqueue(widget)
    if (draggable) {
      $(widget).on('click', function (event) {
        widgetQueue.enqueue(widget)
        console.log(widgetQueue)
      }).draggable({
        start: function (event, ui) {
          widgetQueue.enqueue(widget)
        }
      })
    }
  },

  render () {
    return (
      <div className='widget video' id={this.props.elementId}>
        <video src={this.props.src} {...this.props.config} />
      </div>
    )
  }
})

export default Player
