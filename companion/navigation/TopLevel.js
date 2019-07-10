import React from 'react'
import { Notifications } from 'expo'
import {
  NavigationActions,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { BackHandler } from 'react-native'

import Settings from '../screens/Settings'
import Connection from '../screens/Connection'
import Blank from '../screens/Blank'

const constructNavigator = createAppContainer(
  createStackNavigator(
    {
      Settings: {
        screen: Settings
      },
      Connection: {
        screen: Connection
      }
    },
    {
      headerMode: 'none'
    }
  )
)

export let navigation
const setNavigationRef = ref => {
  navigation = ref
}

export class TopLevelNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.backHandler_ = null
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    this.backHandler_ = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (
          navigation &&
          navigation.state.nav &&
          navigation.state.nav.routes &&
          navigation.state.nav.routes.length &&
          navigation.state.nav.routes[navigation.state.nav.routes.length - 1]
            .routeName !== 'Main'
        ) {
          navigation.dispatch(NavigationActions.back())
          return true
        } else {
          return false
        }
      }
    )

    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
    this.backHandler_ && this.backHandler_.remove()
  }

  render() {
    const RootStackNavigator = constructNavigator

    return (
      <RootStackNavigator
        ref={navRef => {
          setNavigationRef(navRef)
        }}
      />
    )
  }

  _registerForPushNotifications() {
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    )
  }

  _handleNotification = (/* { origin, data } */) => {
    // console.log(
    //   `Push notification ${origin} with data: ${JSON.stringify(data)}`
    // )
  }
}
