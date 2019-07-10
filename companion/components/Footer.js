import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

import { Theme, Layout } from '../constants'

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { style = {} } = this.props

    return (
      <LinearGradient
        colors={[Theme.COLORS.BG + '00', Theme.COLORS.BG + 'FF']}
        style={[styles.overlay, style]}
        pointerEvents={'none'}
      />
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: Layout.safeZoneBottom,
    left: 0
  }
})
