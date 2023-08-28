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
      rowGap: 30,
    },
    createCampaignBox: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      flexDirection: "row",
      columnGap: 18,
      backgroundColor: colors.white,
      borderRadius: 15,
    },
    iconPlusWrapper: {
      width: 40,
      height: 40,
      backgroundColor: colors.secondary,
      borderRadius: 9999,
      alignItems: "center",
      justifyContent: "center",
    },
    createCampaignBoxRight: {
      flex: 1,
    },
    textTitle: {
      fontSize: 14,
      color: colors.text,
      fontWeight: "600",
      lineHeight: 22,
    },
    textDescription: {
      marginTop: 4,
      color: colors.text3,
      fontSize: 12,
      lineHeight: 18,
    },
    textHelp: {
      marginTop: 8,
      color: colors.primary,
      fontSize: 12,
      lineHeight: 18,
    },
    customButtonSecondary: {
      marginTop: 12,
      width: 160,
      backgroundColor: "#EEEAFD",
      borderRadius: 5,
      shadowColor: colors.transparent,
    },

    title: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 30,
    },
  });
};
