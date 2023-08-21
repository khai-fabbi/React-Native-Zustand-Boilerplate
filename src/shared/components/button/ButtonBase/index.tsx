import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import createStyles from "./ButtonBase.styles";

type ButtonBaseProps = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
} & TouchableOpacityProps;

const ButtonBase = ({ title, style, textStyle, ...props }: ButtonBaseProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity {...props} style={[styles.btnContainer, style]}>
      <Text style={{ ...styles.btnText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBase;
