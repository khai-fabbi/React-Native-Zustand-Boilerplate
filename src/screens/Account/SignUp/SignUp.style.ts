import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    wrapper: {
      padding: 24,
      flex: 1,
      position: "relative",
      justifyContent: "center",
    },
    content: {
      alignItems: "center",
      backgroundColor: colors.white,
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 30,
    },
    subTitle: {
      marginTop: 5,
      color: colors.text2,
      fontSize: 12,
      lineHeight: 18,
    },
    btnLoginSocial: {
      padding: 13,
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 10,
    },
    textBtnSocial: {
      fontWeight: "600",
      color: colors.text2,
    },
    inputWrapper: {
      marginTop: 20,
      width: "100%",
      rowGap: 15,
    },
  });
};
