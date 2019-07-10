import React from 'react'
import io from 'socket.io-client'
import { view } from 'react-easy-state'
import { StyleSheet, YellowBox } from 'react-native'
import { AppLoading, Font, Asset } from 'expo'

import { SocketEvent } from './constants'

import { TopLevelNavigation } from './navigation/TopLevel'

import appStore from './appStore'

// Socket.io
export let socket = appStore.getWSHost().then(wsHost =>
  io(wsHost, {
    transports: ['websocket'],
    reconnection: true,
    reconnectionDelay: 1500,
    reconnectionAttempts: 10
  })
)

// Socket.io
export let rasaSocket = appStore.getRasaWSHost().then(wsHost =>
  io(wsHost, {
    transports: ['websocket'],
    reconnection: true,
    reconnectionDelay: 1500,
    reconnectionAttempts: 10
  })
)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false
    }

    appStore.loadSettings()

    // eslint-disable-next-line
    console.ignoredYellowBox = ['Setting a timer', 'Remote debugger']
    YellowBox.ignoreWarnings([
      'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
    ])
  }

  botMsg_ = ({ text, type = 'text', attachment }) =>
    appStore.addMsg(text, 'bot', type, attachment)
  addNearbyPerson_ = payload => appStore.addPerson(payload)

  componentDidMount() {
    socket.then(socket => {
      socket.on(SocketEvent.NEARBY_ADD, this.addNearbyPerson_)
    })
    rasaSocket.then(socket => {
      socket.on(SocketEvent.BOT_UTTERED, this.botMsg_)
    })
  }

  componentWillUnmount() {
    socket.then(socket => {
      socket.removeListener(SocketEvent.NEARBY_ADD, this.addNearbyPerson_)
    })
    rasaSocket.then(socket => {
      socket.removeListener(SocketEvent.BOT_UTTERED, this.botMsg_)
    })
  }

  _handleLoadingError = error => {
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/logo.png')]),
      Font.loadAsync({
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf')
      })
    ])
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    return <TopLevelNavigation />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default view(App)
