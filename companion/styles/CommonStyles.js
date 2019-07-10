import { Platform, StyleSheet } from "react-native"
import { Constants } from "expo"

import { Theme, Fonts } from "../constants"

export default StyleSheet.create({
  header: {
    borderWidth: 0,
    borderColor: "transparent",
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    backgroundColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },
  safeArea: {
    flex: 1,
    backgroundColor: Theme.COLORS.BG
  },
  safeAreaMain: {
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight
      }
    })
  },
  icon: {
    textAlign: "center",
    textAlignVertical: "center"
  },
  card: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: Theme.COLORS.ACCENT,
    flex: 1,
    overflow: "hidden"
  },
  saveBtn: {
    ...Fonts.FONT_PRIMARY_900,
    fontSize: 16,
    color: Theme.COLORS.INACTIVE,
    padding: 10
  },
  bottomSheetOption: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15
  },
  bottomSheetIcon: {
    marginRight: 15
  },
  bottomSheetText: {
    fontSize: 14,
    ...Fonts.FONT_PRIMARY_600
  }
})
