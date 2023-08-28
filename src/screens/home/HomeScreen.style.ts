import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },
    contentContainer: {
      // flex: 1,
      marginTop: 20,
      rowGap: 30,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 25,
    },
  });
};
