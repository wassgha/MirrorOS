/* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Widget from '../helpers/Widget'

class Player extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount () {
    const {widgetQueue, elementId, draggable} = this.props
    const widgetElement = $('#' + elementId)

    const widget = new Widget(widgetElement, widgetQueue, {
      draggable: draggable
    }).create()

  }

  render () {
    return (
      <div className='widget video' id={this.props.elementId}>
        <video src={this.props.src} {...this.props.config} />
      </div>
    )
  }
}

Player.propTypes = {
  elementId: React.PropTypes.string.isRequired,
  draggable: React.PropTypes.any,
  src: React.PropTypes.string.isRequired,
  config: React.PropTypes.object
}

function mapStateToProps(state){
  return { widgetQueue: state.widgetQueue.widgetQueue }
}

export default connect(mapStateToProps)(Player)
