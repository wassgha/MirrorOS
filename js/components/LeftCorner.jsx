import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeftCorner extends Component {

  render () {
    return (
      <span className='corner left'>
        <span className='profile_pic'>
          <img src='../media/images/wassim.jpg' />
          <span className='indicator'></span>
        </span>
        <span className='text'>
          Logged in as<br/>
          <b>Wassim Gr</b>
        </span>
      </span>
    )
  }
}

LeftCorner.propTypes = {
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(LeftCorner)
