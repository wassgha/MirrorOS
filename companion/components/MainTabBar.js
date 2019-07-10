import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import { SafeAreaView } from 'react-navigation'

import CommonStyles from '../styles/CommonStyles'

import { Theme, Layout } from '../constants'

class TabBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation, jumpTo } = this.props

    const { routes } = navigation.state

    return (
      <SafeAreaView style={styles.navBarContainer}>
        <LinearGradient
          colors={[Theme.COLORS.BG + '00', Theme.COLORS.BG + 'FF']}
          style={styles.navBarBg}
          pointerEvents={'none'}
        />
        <LinearGradient
          colors={[Theme.COLORS.BG + '00', Theme.COLORS.BG + 'FF']}
          style={styles.navBarBg}
          pointerEvents={'none'}
        />
        <View style={styles.navBar}>
          {routes.map((route, index) => {
            const focused = index === navigation.state.index

            const color = focused
              ? Theme.COLORS.TITLE
              : Theme.COLORS.TITLE + '50'
            const icon = ['home', 'account-multiple', 'message'][index]

            return (
              <Touchable
                key={index}
                style={[
                  styles.navIconContainer,
                  focused && styles.navIconContainerActive
                ]}
                onPress={() => {
                  jumpTo(route.key)
                }}
              >
                <Icon
                  name={icon}
                  size={20}
                  style={[CommonStyles.icon, { color }]}
                />
              </Touchable>
            )
          })}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    bottom: 0,
    paddingTop: 10
  },
  navBar: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: Layout.tabBarHeight - 10
  },
  navBarBg: {
    position: 'absolute',
    left: 0,
    bottom: Layout.safeZoneBottom,
    width: '100%',
    height: 120
  },
  navIconCamera: {
    width: Layout.mainBtnSize,
    height: Layout.mainBtnSize,
    borderRadius: Layout.mainBtnSize / 2
  },
  navIconContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'center'
  },
  navIconContainerActive: {
    borderBottomColor: Theme.COLORS.TITLE,
    borderBottomWidth: 4
  }
})

export default TabBar
