import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget, addToQueue} from '../../js/actions/index'
import {generateElementId} from '../../js/helpers/Widget'

class Message extends Component {

  constructor (props) {
    super(props)

    this.elementId = generateElementId()
  }

  componentDidMount () {
    this.props.createWidget(this.props, this.elementId, {draggable: true})
  }

  render () {
    return (
      <div className='widget message dark' id={this.elementId}>
        <div className='content'>
          <div className='head'>
            <img src='../media/images/bulk-profile-image-01.jpg' />
            <div className='desc'>
              <span className='title'>Enya Brennan</span>
              <span className='time'>7:51 PM</span>
            </div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='actions'>
          <a href='#' className='action'>Cancel</a>
          <a href='#' className='action highlight'>Reply</a>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  draggable: React.PropTypes.any,
  createWidget: React.PropTypes.func,
  addToQueue: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    widgetQueue: state.widgets.widgetQueue,
    widgetList: state.widgets.widgetList
  }
}

export default connect(mapStateToProps, {createWidget, addToQueue})(Message)
