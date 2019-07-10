import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Theme, Fonts } from '../constants'

export default class InfoGroup extends Component {
  render() {
    const { style = {}, children } = this.props

    return <View style={[styles.container, style]}>{children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 22,
    textAlignVertical: 'center',
    ...Fonts.FONT_PRIMARY_700,
    color: Theme.COLORS.TEXT,
    backgroundColor: Theme.COLORS.ACCENT
  }
})
