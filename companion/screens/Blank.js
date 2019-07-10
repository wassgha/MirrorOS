import React from "react"
import { StyleSheet } from "react-native"

import Screen from "../components/Screen"

export default class Blank extends React.Component {
  render() {
    return <Screen ref="screen" name="Blank" />
  }
}

const styles = StyleSheet.create({})
