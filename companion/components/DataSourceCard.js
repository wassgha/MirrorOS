import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import Color from 'color'

import CommonStyles from '../styles/CommonStyles'
import { Theme, Fonts } from '../constants'

export default class DataSourceCard extends React.Component {
  render() {
    const {
      name = '',
      icon,
      color = Theme.COLORS.ACCENT,
      connected = false,
      disabled = false,
      action = () => {},
      style = {}
    } = this.props

    const accentColor =
      Color(color).luminosity() < 0.7
        ? Theme.COLORS.ALWAYS_LIGHT
        : Theme.COLORS.ALWAYS_DARK
    const Wrapper = disabled ? View : Touchable

    return (
      <Wrapper
        action={action}
        background={Touchable.SelectableBackgroundBorderless()}
      >
        <View
          style={[
            styles.container,
            style,
            { backgroundColor: disabled ? color + '44' : color }
          ]}
        >
          <View style={styles.leftWrapper}>
            {icon && (
              <Icon
                name={icon}
                size={48}
                color={accentColor}
                style={CommonStyles.icon}
              />
            )}
          </View>
          <View style={styles.rightWrapper}>
            <Text
              style={[styles.name, { color: accentColor }]}
              numberOfLines={1}
            >
              {name}
            </Text>
            <View style={styles.details}>
              {connected ? (
                <Icon
                  name={'check-circle'}
                  size={16}
                  color={accentColor + '88'}
                  style={[CommonStyles.icon, styles.detailsIcon]}
                />
              ) : (
                <Icon
                  name={'cancel'}
                  size={16}
                  color={accentColor + '88'}
                  style={[CommonStyles.icon, styles.detailsIcon]}
                />
              )}
              <Text style={[styles.detailsText, { color: accentColor + '88' }]}>
                {connected ? 'Connected' : 'Not linked'}
              </Text>
            </View>
          </View>
        </View>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16
  },
  leftWrapper: {
    marginRight: 10
  },
  rightWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 16,
    ...Fonts.FONT_PRIMARY_700
  },
  details: {
    flexDirection: 'row'
  },
  detailsIcon: {
    marginRight: 6
  },
  detailsText: {
    fontSize: 14,
    ...Fonts.FONT_PRIMARY_500
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    marginBottom: 15
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: Theme.COLORS.DARK_4,
    ...Fonts.FONT_PRIMARY_500
  }
})
