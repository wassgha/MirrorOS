import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import CommonStyles from '../styles/CommonStyles'

import { Theme, Layout, Fonts } from '../constants'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
  render() {
    const {
      placeholder = 'Type some text ...',
      icon,
      style = {},
      onChangeText,
      onSubmit,
      actionableIcon = true,
      value = '',
      secureTextEntry = false,
      autoCapitalize = 'none',
      autoCorrect = true,
      compact = false,
      returnKeyType = 'done'
    } = this.props
    const IconContainer = actionableIcon || value !== '' ? Touchable : View
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.input, compact && { padding: 16, height: 48 }]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Theme.COLORS.PLACEHOLDER}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          blurOnSubmit={!onSubmit}
          onSubmitEditing={onSubmit}
          returnKeyType={returnKeyType}
          removeClippedSubviews
        />
        {icon && (
          <IconContainer
            style={styles.iconContainer}
            onPress={() => {
              if (value !== '') {
                onChangeText('')
              }
            }}
          >
            <Icon
              name={
                value === '' || (!actionableIcon && !this.state.focused)
                  ? icon
                  : 'close'
              }
              size={20}
              color={Theme.COLORS.PLACEHOLDER}
              style={[CommonStyles.icon, { padding: 20 }]}
            />
          </IconContainer>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.ACCENT,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  input: {
    height: 60,
    padding: 20,
    paddingRight: 0,
    flex: 1,
    fontSize: 14,
    ...Fonts.FONT_PRIMARY_500,
    color: Theme.COLORS.TEXT
  },
  iconContainer: {
    borderRadius: Layout.cardRadius
  }
})
