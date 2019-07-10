import React, { Component } from 'react'
import { View, Platform, MaskedViewIOS } from 'react-native'
import { LinearGradient } from 'expo'

class FadeMask extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#00000000', '#00000000', '#000000FF']}
          style={{ height: 80 }}
        />
        <View style={{ backgroundColor: 'black', flex: 1 }} />
      </View>
    )
  }
}

export default class FadeView extends Component {
  render() {
    const ViewElement = Platform.OS == 'ios' ? MaskedViewIOS : View

    const { children, ...otherProps } = this.props
    return (
      <ViewElement maskElement={<FadeMask />} {...otherProps}>
        {children}
      </ViewElement>
    )
  }
}
