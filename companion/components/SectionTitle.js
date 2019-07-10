import React, { Component } from "react"
import { View, StyleSheet, Text, Platform } from "react-native"

import { Theme, Fonts } from "../constants"

export default class SectionTitle extends Component {
  render() {
    const { style = {}, children } = this.props

    return <Text style={[styles.text, style]}>{children}</Text>
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    fontSize: 22,
    textAlignVertical: "center",
    ...Fonts.FONT_PRIMARY_700,
    color: Theme.COLORS.TITLE,
    paddingBottom: 16,
    paddingTop: 16
  }
})
