import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 24,
      paddingTop: 2,
    },
    contentContainer: {
      marginTop: 20,
    },
    titleBg: {
      height: 120,
      width: "100%",
    },
    titleBox: {
      backgroundColor: colors.bgBlackOpacity,
      width: "100%",
      height: "100%",
      borderRadius: 15,
      justifyContent: "center",
    },
    titleText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "700",
      color: colors.white,
      opacity: 1,
    },
    resultBox: {
      flexDirection: "row",
      columnGap: 10,
      marginVertical: 25,
      justifyContent: "space-between",
      alignItems: "center",
    },
    textResult: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text2,
    },
  });
};
