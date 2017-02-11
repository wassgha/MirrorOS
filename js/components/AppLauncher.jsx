import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppLauncherApp extends Component {
  openWidget() {
    $('.app-launcher').fadeOut();
  }

  render () {
    return (
      <div onClick={this.openWidget} className='app-launcher-app' style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
      {this.props.logo ?
        <img src={this.props.logo} />
        :
        <i className='material-icons'>{this.props.icon}</i>
      }
      </div>
    )
  }
}


class AppLauncher extends Component {
  closeAppLauncher() {
    $('.app-launcher').fadeOut();
  }

  render () {
    return (
      <div className='app-launcher'>
        <div className='app-launcher-section'>
          <button className='app-launcher-back-button'>
            <i className='material-icons' onClick={this.closeAppLauncher}>arrow_back</i>
          </button>
          <span className='app-launcher-section-title'>Apps</span>
          <div className='app-launcher-section-icons'>
            <AppLauncherApp bgColor='red' logo='https://www.youtube.com/yt/brand/media/image/YouTube-logo-light.png' />
            <AppLauncherApp bgColor='#3498db' icon='wb_sunny' />
            <AppLauncherApp bgColor='#262626' logo='http://techfaster.com/wp-content/uploads/2014/07/Uber-Logo.png' />
            <AppLauncherApp bgColor='#ecf0f1' icon='settings' color='#7f8c8d' />
            <AppLauncherApp bgColor='#8e44ad' icon='keyboard_voice' />
            <AppLauncherApp bgColor='#c0392b' icon='today' color='white' />
            <AppLauncherApp bgColor='#ecf0f1' icon='home' color='#7f8c8d' />
            <AppLauncherApp bgColor='#2980b9' icon='portrait' />
          </div>
        </div>
      </div>
    )
  }
}

AppLauncher.propTypes = {
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(AppLauncher)
