import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Header } from 'react-navigation'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const maxCardWidth = 500

export default {
  width,
  height,
  iconSize: 28,
  safeZoneBottom: 32,
  headerHeight: 100,
  userDimension: 150,
  statusBarHeight: getStatusBarHeight(),
  headerHeight: Header.HEIGHT,
  userSpacing: 10,
  maxCardWidth: maxCardWidth,
  HITSLOP_10: { top: 10, left: 10, right: 10, bottom: 10 }
}
