import { ExtendedTheme, useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";

interface IProps extends ViewProps {
  title: string;
  textStyle?: TextStyle;
}
const ChipBase = ({ title, style, textStyle, ...props }: IProps) => {
  const theme = useTheme();
  //   const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

export default ChipBase;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      borderRadius: 4,
      paddingHorizontal: 14,
      paddingVertical: 4,
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "flex-start",
    },
    text: {
      color: colors.white,
      fontWeight: "500",
      fontSize: 12,
    },
  });
  return styles;
};
