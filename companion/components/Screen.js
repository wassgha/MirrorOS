import React from 'react'
import { View, RefreshControl, Animated, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-navigation'
import { Segment } from 'expo'

import { Layout, Theme } from '../constants'
import CommonStyles from '../styles/CommonStyles'

export default class Screen extends React.Component {
  constructor(props) {
    super(props)
    this.scroll = new Animated.Value(0)
  }

  scrollTo = element => {
    if (element === 'top') {
      this._scrollView &&
        this._scrollView.scrollToPosition({ y: 0, animated: true })
    } else {
      this.refs[element].measure((x, y, width, height, pageX, pageY) => {
        this._scrollView &&
          this._scrollView.scrollToPosition({ y: pageY, animated: true })
      })
    }
  }

  componentDidMount() {
    const { navigation, name = 'Undefined', meta } = this.props
    if (meta) {
      Segment.screenWithProperties(name, meta)
    } else {
      Segment.screen(name)
    }
  }

  render() {
    const {
      children,
      overlay = () => <View />,
      style = { backgroundColor: Theme.COLORS.BG },
      refreshing = false,
      standalone = false,
      onRefresh = () => {},
      bottomSpacing = Layout.safeZoneBottom,
      keyboardAware = false,
      refreshable = true,
      bounces = true,
      /* NOTE: KeyboardAwareScrollView does not support the scroll event,
         so we can't have a screen that has both keyboard awareness and
         sticky header */
      ...otherProps
    } = this.props

    const ScrollViewElement = keyboardAware
      ? KeyboardAwareScrollView
      : Animated.ScrollView
    const WrapperElement = standalone ? SafeAreaView : View

    return (
      <WrapperElement
        style={{
          ...(standalone ? CommonStyles.safeArea : styles.screen),
          style
        }}
      >
        <ScrollViewElement
          enableOnAndroid={true}
          ref={ref => (this._scrollView = ref)}
          contentContainerStyle={style}
          refreshControl={
            refreshable && (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={40}
                enabled={refreshable}
              />
            )
          }
          bounces={bounces}
          overScrollMode={'never'}
          scrollEventThrottle={1}
          extraHeight={0}
          onScroll={
            keyboardAware
              ? undefined
              : Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
                  {
                    useNativeDriver: true
                  }
                )
          }
          keyboardShouldPersistTaps={'handled'}
          keyboardVerticalOffset={16}
          {...otherProps}
        >
          {children}
          <View style={{ height: bottomSpacing }} />
        </ScrollViewElement>
        {overlay(this.scroll)}
      </WrapperElement>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.COLORS.BG,
    position: 'relative'
  }
})
