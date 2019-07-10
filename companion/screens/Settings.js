import React from 'react'
import { StyleSheet, View } from 'react-native'
import { view } from 'react-easy-state'

import { SettingKeys } from '../constants'
import appStore from '../appStore'

import Title from '../components/Title'
import SectionTitle from '../components/SectionTitle'
import SubSectionTitle from '../components/SubSectionTitle'
import Button from '../components/Button'
import Screen from '../components/Screen'
import Input from '../components/Input'
import DataSourceCard from '../components/DataSourceCard'

class Settings extends React.Component {
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
        name="Settings"
        refreshable={false}
        standalone={true}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Title>MirrorOS</Title>
            <View style={styles.btns}>
              <Button
                size={24}
                icon="access-point"
                action={() => navigation.navigate('Connection')}
              />
            </View>
          </View>
          <SectionTitle>General</SectionTitle>
          <SubSectionTitle>Device name</SubSectionTitle>
          <Input
            value={host}
            placeholder="MirrorOS Client"
            onChangeText={text => this.setState({ name: text })}
            onSubmit={() => {
              // appStore.setSetting(SettingKeys.DEVICE_NAME, host)
            }}
          />
          <SectionTitle>Installed Themes</SectionTitle>
          <SectionTitle>Data sources</SectionTitle>
          <DataSourceCard
            name="Facebook"
            icon={'facebook'}
            color={'#3C5A99'}
            connected={false}
          />
          <DataSourceCard
            name="Instagram"
            icon={'instagram'}
            color={'#F56040'}
            connected={false}
            disabled
          />
          <DataSourceCard
            name="LinkedIn"
            icon={'linkedin'}
            color={'#0077B5'}
            connected={false}
            disabled
          />
          <SectionTitle>Installed Apps</SectionTitle>
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

export default view(Settings)
