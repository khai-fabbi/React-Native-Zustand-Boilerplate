import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 24,
    },
    contentContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 25,
      backgroundColor: colors.white,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 30,
    },
    subTitle: {
      marginTop: 4,
      fontSize: 12,
      lineHeight: 18,
      color: colors.text3,
    },
    editWrapper: {
      marginTop: 30,
      rowGap: 30,
    },
    infoWrapper: {},
    titleInfo: {
      fontSize: 15,
      fontWeight: "600",
      lineHeight: 26,
    },
  });
};
