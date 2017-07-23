/* global $ */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { generateUserInfo } from '../actions'

class Login extends Component {

  constructor (props) {
    super(props)

    this.login = this.login.bind(this)
    this.htmlTemplates = {
      detected: '<i class="material-icons">sentiment_neutral</i><br>I don\'t see you',
      identity: '<i class="material-icons">sentiment_dissatisfied</i><br>I don\'t know you',
      worked: name => `<i class="material-icons">sentiment_satisfied</i><br>Hello <b>${name}.</b> Smile to login!`
    }
  }

  componentDidMount () {
    this.props.socket.on('message', message => {
      if (message.detected === false) {
        $('#login').html(this.detected)
      } else if (message.identity === 0) {
        $('#login').html('<i class="material-icons">sentiment_dissatisfied</i><br>I don\'t know you')
      } else {
        // this.props.generateUserInfo(message.user)
        $('#login').html(`<i class="material-icons">sentiment_satisfied</i><br>Hello <b>${message.user.first_name}.</b> Smile to login!`)
        if (message.smiling) {
          this.login()
        }
      }
    })

    $('#add-user').click(() => {
      this.props.generateUserInfo({ name: 'Zura' })
      this.login()
    })
  }

  login () {
    $('#login').fadeOut(500)
    $('#loader').fadeIn(1000, () => {
      setTimeout(() => {
        $('#notification').fadeIn(1000)
        setTimeout(() => {
          $('#loader').fadeOut()
          setTimeout(() => {
            this.context.router.push('/home')
            $('#notification').fadeOut(1000)
          }, 500)
        }, 1000)
      }, 500)
    })
  }

  render () {
    return (
      <div>
        <div className='login' id='login'>
          <i className='material-icons'>sentiment_neutral</i>
          <br />
          <span id='instructions'>I don't see you.</span>
        </div>
        <div className='training widget'>
          <h3>Train user model</h3>
          <select id='user' />
          <button id='train'>Train</button>
        </div>
        <a href='#' id='add-user' className='tray'>
          <i className='material-icons'>group_add</i> Add user
        </a>
        <div className='loader' id='loader'>
          <img src='../media/images/wassim.jpg' />
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps, { generateUserInfo })(Login)
