import CheckBox from "@react-native-community/checkbox";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import React, { ReactNode, useMemo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface IProps extends TouchableOpacityProps {
  children: ReactNode;
  isActive?: boolean;
}
const ButtonMethodPayment = ({
  children,
  style,
  isActive = false,
  ...props
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && { borderColor: theme.colors.primary },
        style,
      ]}
      {...props}
    >
      {isActive && (
        <View style={{ position: "absolute", top: 7, right: 7 }}>
          <CheckBox
            value={isActive}
            onTintColor={theme.colors.primary}
            onFillColor={theme.colors.primary}
            onCheckColor={theme.colors.white}
            style={styles.checkbox}
          />
        </View>
      )}
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export default ButtonMethodPayment;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      width: 100,
      height: 76,
      // alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      columnGap: 8,
      backgroundColor: colors.white,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.transparent,

      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    checkbox: {
      width: 12,
      height: 12,
    },
  });
  return styles;
};
