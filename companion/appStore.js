/* eslint-disable */

import url from 'url'
import { Constants /* Speech */ } from 'expo'
import { store } from 'react-easy-state'
import _ from 'lodash'
import { AsyncStorage } from 'react-native'

import Actions from './actions'
import { Config, SocketEvent, SettingKeys } from './constants'
import { rasaSocket } from './App'

const appStore = store({
  chatlog: [],
  people: [],
  settings: {},
  settingsLoaded: false,
  async loadSettings() {
    const settings = await Promise.all(
      Object.values(SettingKeys).map(async key => {
        const value = await AsyncStorage.getItem(key)
        appStore.settings[key] = value
      })
    )
    appStore.settingsLoaded = true
    return settings
  },
  async setSetting(key, value) {
    if (!Object.values(SettingKeys).includes(key)) return
    appStore.settings[key] = value
    await AsyncStorage.setItem(key, value)
  },
  async getAPIHost() {
    if (!appStore.settingsLoaded) await appStore.loadSettings()
    return __DEV__
      ? `http://${
          url.parse(
            Constants.experienceUrl ||
              Constants.linkingUrl ||
              Constants.linkingUri
          ).hostname
        }:8080`
      : `http://${appStore.settings[SettingKeys.HOST_ENDPOINT]}:8080`
  },
  async getWSHost() {
    if (!appStore.settingsLoaded) await appStore.loadSettings()
    return __DEV__
      ? `ws://${
          url.parse(
            Constants.experienceUrl ||
              Constants.linkingUrl ||
              Constants.linkingUri
          ).hostname
        }:8080`
      : `ws://${appStore.settings[SettingKeys.HOST_ENDPOINT]}:8080`
  },
  async getRasaWSHost() {
    if (!appStore.settingsLoaded) await appStore.loadSettings()
    return __DEV__
      ? `ws://${
          url.parse(
            Constants.experienceUrl ||
              Constants.linkingUrl ||
              Constants.linkingUri
          ).hostname
        }:5005`
      : `ws://${appStore.settings[SettingKeys.HOST_ENDPOINT]}:5005`
  },
  async getChatlog() {
    appStore.isLoading = true
    appStore.chatlog = await Actions.chat.getLog()
    appStore.isLoading = false
  },
  async addMsg(data = '', sender = 'me', type = 'text', attachment = []) {
    appStore.chatlog = [
      ...appStore.chatlog,
      {
        sender,
        type,
        data,
        attachment
      }
    ]
    io = await rasaSocket
    if (sender == 'me') io.emit(SocketEvent.USER_UTTERED, { message: data })
    // if (sender == 'bot') Speech.speak(data, { pitch: 0.5 })
    return Promise.resolve()
  },
  async addPerson(data = {}) {
    if (_.some(appStore.people, { id: data.id })) return Promise.resolve()
    appStore.isLoading = true
    apiHost = await appStore.getAPIHost()
    appStore.people = [
      ...appStore.people,
      {
        ...data,
        picture: apiHost + '/' + data.picture
      }
    ]
    appStore.isLoading = false
    return Promise.resolve()
  }
})

export default appStore
