import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { Theme, Fonts } from '../constants'
import CommonStyles from '../styles/CommonStyles'

export default class InfoRow extends Component {
  render() {
    const { style = {}, title, icon, children } = this.props

    return (
      <View style={[styles.container, style]}>
        {(title || icon) && (
          <View style={styles.keyContainer}>
            {icon && (
              <Icon
                color={Theme.COLORS.TEXT}
                name={icon}
                size={16}
                style={[CommonStyles.icon, styles.keyIcon]}
              />
            )}
            {title && <Text style={styles.key}>{title}</Text>}
          </View>
        )}
        <View style={styles.valueContainer}>{children}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    fontSize: 22,
    textAlignVertical: 'center',
    ...Fonts.FONT_PRIMARY_700,
    color: Theme.COLORS.TEXT,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.TITLE + '0C'
  },
  keyIcon: {
    marginRight: 16
  },
  keyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: 160
  },
  key: {
    color: Theme.COLORS.TEXT
  },
  valueContainer: {
    flex: 1
  }
})
