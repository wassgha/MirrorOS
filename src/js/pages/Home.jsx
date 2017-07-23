/* global $ */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import LeftCorner from '../components/LeftCorner'
import RightCorner from '../components/RightCorner'
import AppLauncher from '../components/AppLauncher'
import Message from '../../widgets/Message'
import VideoPlayer from '../../widgets/VideoPlayer'
import AudioPlayer from '../../widgets/AudioPlayer'

class Home extends Component {

  componentDidMount () {
    $('.border.top').animate({'width': '100%'}, 200, () => {
      $('.border.left').animate({'height': '100%'}, 200, () => {
        $('.border.bottom').animate({'width': '100%'}, 200, () => {
          $('.border.right').animate({'height': '100%'}, 200, () => {
            $('.corner.left').slideDown(1200)
            $('.corner.right').slideDown(1200)
            $('.app-launcher-button').slideDown(1200, () => {
              $('.widget').fadeIn(1200)
            })
          })
        })
      })
    })
    let idleTime = 0
    setInterval(() => {
      idleTime++
      if (idleTime > 5) {
        //$('body').hide()
      }
    }, 3000)

    this.props.socket.on('message', message => {
      if (message.detected === false) {
        $('.corner.left .profile_pic .indicator').removeClass('green').removeClass('orange').addClass('gray')
      } else if (message.identity === 0) {
        $('.corner.left .profile_pic .indicator').removeClass('green').removeClass('gray').addClass('orange')
      } else {
        $('.corner.left .profile_pic .indicator').removeClass('orange').removeClass('gray').addClass('green')
        idleTime = 0
        if (!$('body').is(':visible')) {
          $('body').show()
        }
      }
    })
  }

  displayAppLauncher () {
    $('.app-launcher').fadeIn()
  }

  render () {
    const videoPlayerConfig = {
      controls: false,
      loop: true,
      muted: true
    }

    return (
      <div>
        <div className='border top' />
        <div className='border left' />
        <div className='border bottom' />
        <div className='border right' />
        <LeftCorner />
        <RightCorner />
        <button className='app-launcher-button'>
          <i className='material-icons' onClick={this.displayAppLauncher}>apps</i>
        </button>
        <AppLauncher />
        <VideoPlayer src='../media/video/big_buck_bunny.mp4'
          config={videoPlayerConfig} draggable />
        <Message draggable />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    widgetQueue: state.widgets.widgetQueue,
    socket: state.socket
  }
}

export default connect(mapStateToProps)(Home)
