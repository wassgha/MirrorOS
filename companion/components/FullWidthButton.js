import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import Color from 'color'
import Touchable from 'react-native-platform-touchable'

import CommonStyles from '../styles/CommonStyles'
import { Theme, Fonts, Layout } from '../constants'

export default class Button extends Component {
  render() {
    const {
      navigation,
      style = {},
      color = Theme.COLORS.ACCENT,
      text = 'submit',
      icon,
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
            height: size + 16 * 2
          }
        ]}
        pointerEvents={'all'}
      >
        <Touchable style={styles.touchable} onPress={action}>
          <View style={styles.content}>
            {icon && (
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
            )}
            <Text
              style={[
                styles.text,
                {
                  color:
                    Color(color).luminosity() < 0.7
                      ? Theme.COLORS.ALWAYS_LIGHT
                      : Theme.COLORS.ALWAYS_DARK
                }
              ]}
            >
              {text}
            </Text>
          </View>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 4
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textTransform: 'uppercase',
    color: Theme.COLORS.TITLE
  },
  touchable: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
