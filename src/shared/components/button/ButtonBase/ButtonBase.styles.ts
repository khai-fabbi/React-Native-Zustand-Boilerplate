import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    btnContainer: {
      backgroundColor: colors.primary,
      width: "100%",
      paddingVertical: 15,
      paddingHorizontal: 12,
      borderRadius: 10,
      shadowOffset: {
        width: -10,
        height: 10,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      color: colors.white,
      // lineHeight: 26,
      fontSize: 16,
      fontWeight: "600",
    },
  });
  return styles;
};
