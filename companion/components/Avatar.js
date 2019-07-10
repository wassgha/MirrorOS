import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import Touchable from 'react-native-platform-touchable'
import _ from 'lodash'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import Placeholder from 'rn-placeholder'
import Color from 'color'

import CommonStyles from '../styles/CommonStyles'

import { Theme, Fonts } from '../constants'

class Avatar extends Component {
  _visitProfile = () => {
    const { id = 'me', navigation } = this.props

    navigation.navigate('User', { id: id })
  }

  renderAvatar_() {
    const {
      image,
      online,
      social,
      style,
      name,
      color = Theme.COLORS.INACTIVE,
      size = 32,
      background = Theme.COLORS.BG,
      check = false,
      hasBorder = false
    } = this.props

    const indicatorSize = _.ceil(size * 0.3)
    const checkSize = _.ceil(size * 0.7)

    const socialInfo =
      social &&
      {
        facebook: { icon: 'facebook', bg: '#3B5998', color: 'white' },
        google: { icon: 'google', bg: 'white', color: '#333' }
      }[social]

    return (
      <Placeholder.Media
        size={size}
        hasRadius
        color={Theme.COLORS.LIGHT_4}
        animate="fade"
        onReady={!!(image || name || name == '')}
      >
        <View
          style={[
            {
              width: size,
              height: size
            },
            style
          ]}
        >
          <View
            style={[
              styles.avatarContainer,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: color,
                borderWidth: hasBorder ? 0.05 * size : 0
              }
            ]}
          >
            {image ? (
              <Image
                style={[
                  styles.avatar,
                  {
                    width: size,
                    height: size,
                    borderRadius: size / 2
                  }
                ]}
                source={{ uri: image, cache: 'force-cache' }}
              />
            ) : (
              <Text
                style={[
                  styles.initials,
                  {
                    color:
                      Color(color).luminosity() < 0.7
                        ? Theme.COLORS.ALWAYS_LIGHT
                        : Theme.COLORS.ALWAYS_DARK,
                    fontSize: size * 0.5
                  }
                ]}
              >
                {name || name == '' ? _.toUpper(name[0]) : ''}
              </Text>
            )}
            {check && (
              <View
                style={[
                  styles.check,
                  {
                    width: size,
                    height: size,
                    borderRadius: size / 2
                  }
                ]}
              >
                <Icon name={'check'} color={'white'} size={checkSize} />
              </View>
            )}
          </View>
          {online !== undefined && (
            <View
              style={[
                styles.indicator,
                {
                  width: indicatorSize,
                  height: indicatorSize,
                  borderRadius: indicatorSize / 2,
                  borderWidth: _.ceil(indicatorSize * 0.2),
                  borderColor: background,
                  backgroundColor: online
                    ? Theme.COLORS.SUCCESS
                    : Theme.COLORS.DARK_4
                }
              ]}
            />
          )}
          {social !== undefined && (
            <View
              style={[
                styles.indicator,
                {
                  width: indicatorSize,
                  height: indicatorSize,
                  borderRadius: indicatorSize / 2,
                  backgroundColor: socialInfo.bg
                }
              ]}
            >
              <Icon
                name={socialInfo.icon}
                size={_.ceil(indicatorSize * 0.6)}
                color={socialInfo.color}
              />
            </View>
          )}
        </View>
      </Placeholder.Media>
    )
  }

  render() {
    const {
      style = {},
      touchable = false,
      action = this._visitProfile
    } = this.props

    return touchable ? (
      <Touchable
        key={'avatar'}
        onPress={action}
        style={[styles.container, style]}
        background={Touchable.SelectableBackgroundBorderless()}
      >
        {this.renderAvatar_()}
      </Touchable>
    ) : (
      <View style={[styles.container, style]}>{this.renderAvatar_()}</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  avatarContainer: {
    backgroundColor: Theme.COLORS.LIGHT_4,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.COLORS.BG
  },
  avatar: {
    backgroundColor: Theme.COLORS.LIGHT_4,
    overflow: 'hidden'
  },
  initials: {
    ...Fonts.FONT_PRIMARY_600,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  check: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editIndicator: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withNavigation(Avatar)
