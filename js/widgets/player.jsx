/* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget} from '../actions/index'

class Player extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.props.createWidget(this.props, { draggable: true})
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
  return { widgetQueue: state.widgets.widgetQueue}
}

export default connect(mapStateToProps, {createWidget})(Player)
