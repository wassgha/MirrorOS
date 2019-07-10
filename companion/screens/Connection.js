import React from 'react'
import { StyleSheet, View } from 'react-native'
import { view } from 'react-easy-state'

import { SettingKeys, Theme } from '../constants'
import appStore from '../appStore'

import Title from '../components/Title'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Screen from '../components/Screen'
import Input from '../components/Input'
import FullWidthButton from '../components/FullWidthButton'

class Connection extends React.Component {
  constructor(props) {
    super(props)

    this.state = { host: appStore.settings[SettingKeys.HOST_ENDPOINT] }
  }

  render() {
    const { navigation } = this.props
    const { host } = this.state
    return (
      <Screen
        ref="screen"
        name="Connection"
        refreshable={false}
        standalone={true}
      >
        <View style={styles.container}>
          <Button
            size={24}
            icon="chevron-left"
            action={() => navigation.goBack()}
          />
          <View style={styles.header}>
            <Title>Connection</Title>
          </View>
          <SectionTitle>MirrorOS Server</SectionTitle>
          <Input
            value={host}
            placeholder="Ex. http://192.168.1.1:8080/"
            onChangeText={text => this.setState({ host: text })}
            onSubmit={() => {
              appStore.setSetting(SettingKeys.HOST_ENDPOINT, host)
            }}
          />
          <FullWidthButton
            text="Done"
            color={Theme.COLORS.TITLE}
            style={{ marginTop: 16 }}
          />
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8
  }
})

export default view(Connection)
