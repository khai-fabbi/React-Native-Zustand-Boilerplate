import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import React, { useMemo } from "react";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { GoogleIcon } from "@shared-components/icons";

type ButtonLoginSocialProps = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
} & TouchableOpacityProps;
const ButtonLoginSocial = ({
  title,
  style,
  textStyle,
  ...props
}: ButtonLoginSocialProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity {...props} style={[styles.btnLoginSocial, style]}>
      <GoogleIcon />
      <Text style={[styles.textBtnSocial, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLoginSocial;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    btnLoginSocial: {
      width: "100%",
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
  });
  return styles;
};
