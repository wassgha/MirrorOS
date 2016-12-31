/* global $ */

import React from 'react'
import Widget from '../helpers/widget'

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
    const widgetElement = $('#' + elementId)

    const widget = new Widget(widgetElement, widgetQueue, {
      draggable: draggable
    }).create()

    widget.create()
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
