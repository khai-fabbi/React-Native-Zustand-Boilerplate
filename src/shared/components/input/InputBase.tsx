import { ExtendedTheme, useTheme } from "@react-navigation/native";
import React, { ReactNode, useMemo } from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
interface InputProps extends TextInputProps {
  label?: string;
  iconRight?: ReactNode;
}

const InputBase = ({ label, style, iconRight, ...props }: InputProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.textLabel}>{label}</Text>}
      <View style={{ position: "relative" }}>
        <TextInput
          {...props}
          style={[styles.input, style, { ...(iconRight && styles.pr40) }]}
          placeholderTextColor={theme.colors.text4}
        />
        <TouchableOpacity style={styles.iconRight}>
          {iconRight}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputBase;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    wrapper: {
      width: "100%",
      flexDirection: "column",
      rowGap: 10,
    },
    textLabel: {
      color: colors.text2,
    },
    input: {
      position: "relative",
      width: "100%",
      fontSize: 14,
      fontWeight: "500",
      borderColor: colors.borderColor,
      borderWidth: 1,
      backgroundColor: colors.white,
      color: colors.text,
      paddingHorizontal: 24,
      paddingVertical: 15,
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
    iconRight: {
      padding: 12,
      position: "absolute",
      right: 0,
    },
    pr40: {
      paddingRight: 40,
    },
  });
  return styles;
};
