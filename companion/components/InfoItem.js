import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import Touchable from 'react-native-platform-touchable'

import { Theme, Fonts } from '../constants'
import CommonStyles from '../styles/CommonStyles'

export default class InfoItem extends Component {
  render() {
    const { style = {}, id = 0, icon, value, action } = this.props
    const ViewElement = action ? Touchable : View

    return (
      <ViewElement
        onPress={action}
        style={[
          styles.wrapper,
          style,
          id % 2 == 0
            ? { backgroundColor: Theme.COLORS.TITLE + '05' }
            : { backgroundColor: Theme.COLORS.TITLE + '15' }
        ]}
      >
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={16}
              color={Theme.COLORS.TEXT}
              style={[CommonStyles.icon, styles.keyIcon]}
            />
          )}
          {value && <Text style={styles.value}>{value}</Text>}
        </View>
      </ViewElement>
    )
  }
}

const styles = StyleSheet.create({
  keyIcon: {
    marginRight: 16
  },
  wrapper: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 22,
    textAlignVertical: 'center',
    ...Fonts.FONT_PRIMARY_700,
    color: Theme.COLORS.TITLE,
    padding: 16,
    flex: 1
  },
  title: {
    color: Theme.COLORS.TEXT
  },
  value: {
    color: Theme.COLORS.TEXT
  }
})
