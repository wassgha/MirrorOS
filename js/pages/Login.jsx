/* global $ */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

  componentDidMount () {
    this.props.socket.on('message', message => {
      if (message.detected === false) {
        $('.login').html('<i class="material-icons">sentiment_neutral</i><br>I don\'t see you')
      } else if (message.identity === 0) {
        $('.login').html('<i class="material-icons">sentiment_dissatisfied</i><br>I don\'t know you')
      } else {
        $('.login').html('<i class="material-icons">sentiment_satisfied</i><br>Hello <b>' + message.user.first_name + '.</b> Smile to login!')
        if (message.smiling) {
          this.login()
        }
      }
    })

    $('#add-user').click(() => {
      this.login()
    })
  }

  login () {
    console.log('login')
    $('.login').fadeOut(500)
    $('.loader').fadeIn(1000, () => {
      setTimeout(() => {
        $('.notification').slideDown(500)
        setTimeout(() => {
          $('.loader').fadeOut()
          setTimeout(() => {
            $('.notification').slideUp(500, () => {
              this.context.router.push('/home')
            })
          }, 500)
        }, 1000)
      }, 500)
    })
  }

  render () {
    return (
      <div>
        <div className='login'>
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
        <div className='loader'>
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

export default connect(mapStateToProps, {})(Login)
