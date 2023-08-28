import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 24,
    },
    inputWrapper: {
      flex: 1,
      position: "relative",
    },
    inputCustom: {
      paddingRight: 60,
      borderRadius: 9999,
      backgroundColor: colors.white,
      borderColor: colors.transparent,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    profilePicImageStyle: {
      height: 40,
      width: 40,
      borderRadius: 9999,
    },
    btnSearch: {
      position: "absolute",
      right: 12,
      top: 12,
      paddingHorizontal: 14,
      paddingVertical: 8,
      backgroundColor: colors.primary,
      alignItems: "center",
      borderRadius: 9999,
    },
  });
};
