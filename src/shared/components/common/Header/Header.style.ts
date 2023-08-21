import { ExtendedTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet } from "react-native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  const { width } = Dimensions.get("window");
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    header: {
      width: width * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
  });
};
