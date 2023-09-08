import { ExtendedTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");
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
    imgSlideWrapper: {
      width: width - 48,
      aspectRatio: 16 / 9,
    },
    imgSlide: {
      // height: 150,
      width: "100%",
      height: "100%",
      // aspectRatio: 16 / 9,
    },
    pagination: {
      marginTop: 10,
      flexDirection: "row",
      alignSelf: "center",
      columnGap: 6,
    },
    paginationItem: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      backgroundColor: colors.text4,
      opacity: 0.4,
    },
    contentWrapper: {
      marginTop: 10,
    },
    imageYourCampaign: {
      width: "100%",
      height: 200,
      borderRadius: 15,
    },
    categoryContainer: {
      flexDirection: "row",
      columnGap: 10,
      justifyContent: "space-between",
    },
    iconShareWrapper: {
      flexDirection: "row",
      columnGap: 12,
    },
    nameCategory: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
    },
    nameDetailCategory: {
      color: colors.text3,
      fontSize: 14,
      fontWeight: "500",
    },
    nameCampaingn: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 26,
    },
    description: {
      marginTop: 10,
      color: colors.text3,
      fontSize: 12,
      lineHeight: 18,
    },
    info: {
      marginTop: 15,
      flexDirection: "row",
      columnGap: 30,
    },
    textInfoItem: {
      color: colors.text2,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 26,
    },
    textInfoDescription: {
      color: colors.text4,
      fontSize: 14,
      lineHeight: 22,
    },
    authorBox: {
      marginTop: 15,
      flexDirection: "row",
      columnGap: 12,
      alignItems: "center",
    },
    authorImg: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 9999,
    },
    authorName: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.text,
    },
    textTotalCampaign: {
      color: colors.primary,
      fontSize: 12,
      fontWeight: "600",
    },
    textAuthorLocation: {
      color: colors.text3,
      fontSize: 12,
    },

    // Description Campaign
    campaignDescriptionWrapper: {},
    navWrapper: {
      flexDirection: "row",
      columnGap: 5,
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: -24,
      backgroundColor: colors.white,
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
    navItem: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text3,
    },
    descriptionBox: {
      marginTop: 16,
    },
    descriptionTitle: {
      fontWeight: "600",
      fontSize: 14,
    },
    descriptionContent: {
      marginTop: 12,
    },
    descriptionText: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      textAlign: "justify",
      color: colors.text3,
    },

    titleSuggestion: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 25,
    },
    supportBox: {
      marginTop: 12,
      paddingHorizontal: 20,
      paddingVertical: 25,
      backgroundColor: colors.white,
      borderRadius: 10,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    textTitleSupport: {
      alignSelf: "center",
      fontWeight: "500",
      color: colors.text3,
      fontSize: 16,
    },
    descriptionSupportBox: {
      marginTop: 20,
      padding: 15,
      borderRadius: 10,
      backgroundColor: colors.bgTextInputDisable,
    },
  });
};
