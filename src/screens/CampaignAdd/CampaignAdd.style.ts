import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    contentContainer: {
      marginTop: 20,
      rowGap: 15,
      backgroundColor: colors.white,
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 25,
    },
    inputWrapper: {
      marginTop: 10,
      rowGap: 15,
    },
    inputArea: {
      paddingTop: 15,
      paddingBottom: 15,
      height: 100,
    },
  });
};
