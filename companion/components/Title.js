import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'

import { Theme, Fonts } from '../constants'

export default class Title extends Component {
  render() {
    const { style = {}, children, capitalize = false } = this.props

    return (
      <Text
        style={[
          styles.text,
          style,
          capitalize && { textTransform: 'capitalize' }
        ]}
      >
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    fontSize: 48,
    textAlignVertical: 'center',
    ...Fonts.FONT_SECONDARY_900,
    color: Theme.COLORS.TITLE
  }
})
