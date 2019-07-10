import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Color from 'color'
import Touchable from 'react-native-platform-touchable'

import CommonStyles from '../styles/CommonStyles'
import { Theme, Layout } from '../constants'

export default class Button extends Component {
  render() {
    const {
      style = {},
      color = Theme.COLORS.ACCENT,
      icon = 'settings',
      size = Layout.iconSize,
      action = () => {}
    } = this.props

    return (
      <View
        style={[
          styles.container,
          style,
          {
            backgroundColor: color,
            width: size + 16 * 2,
            height: size + 16 * 2,
            borderRadius: (size + 16 * 2) / 2
          }
        ]}
        pointerEvents={'all'}
      >
        <Touchable style={styles.touchable} onPress={action}>
          <Icon
            name={icon}
            size={size}
            color={
              Color(color).luminosity() < 0.7
                ? Theme.COLORS.ALWAYS_LIGHT
                : Theme.COLORS.ALWAYS_DARK
            }
            style={CommonStyles.icon}
          />
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
