import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import _ from 'lodash'

import { Theme } from '../constants'

import Avatar from './Avatar'

const ADD_BUTTON = { key: 'ADD_BUTTON' }

export default class AvatarList extends React.Component {
  render() {
    const {
      list = [],
      style = {},
      size = 52,
      background = Theme.COLORS.ACCENT,
      add = false,
      noStatus = false,
      check = false,
      touchable = false,
      action,
      addAction = () => {}
    } = this.props

    const listWithAddBtn = [...list]

    if (add && !_.includes(listWithAddBtn, ADD_BUTTON)) {
      listWithAddBtn.unshift(ADD_BUTTON)
    }

    return (
      <FlatList
        style={[{ padding: size * 0.2 }, style]}
        data={listWithAddBtn}
        renderItem={({ item }) =>
          item === ADD_BUTTON ? (
            <Touchable
              style={[
                { marginLeft: size * 0.05, marginRight: size * 0.05 },
                styles.item
              ]}
              onPress={addAction}
              background={Touchable.SelectableBackgroundBorderless()}
              key={ADD_BUTTON.key}
            >
              <View
                style={[
                  styles.addButton,
                  {
                    width: size,
                    height: size,
                    borderRadius: size / 2
                  }
                ]}
              >
                <Text style={[styles.addButtonText, { fontSize: size / 2 }]}>
                  +
                </Text>
              </View>
            </Touchable>
          ) : (
            <Avatar
              style={[
                { marginLeft: size * 0.05, marginRight: size * 0.05 },
                styles.item
              ]}
              key={item.key}
              id={item.id}
              image={item.picture}
              color={item.color}
              name={item.name}
              size={size}
              background={background}
              touchable={touchable}
              action={action}
              online={noStatus ? undefined : item.online}
              check={check}
            />
          )
        }
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    borderWidth: 1,
    borderColor: Theme.COLORS.ACCENT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    textAlign: 'center',
    color: Theme.COLORS.TEXT
  },
  item: {}
})
