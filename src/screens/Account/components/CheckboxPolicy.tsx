import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import CheckBox, { CheckBoxProps } from "@react-native-community/checkbox";

interface IProps extends CheckBoxProps {}
const CheckboxPolicy = ({ value, onValueChange, ...props }: IProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.checkboxContainer}>
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        onTintColor={theme.colors.primary}
        onFillColor={theme.colors.primary}
        onCheckColor={theme.colors.white}
        style={styles.checkbox}
        boxType="square"
        {...props}
      />
      <Text style={styles.label}>
        I agree to the{" "}
        <Text style={{ color: theme.colors.secondary }}>Tearms of Use</Text> and
        have read and understand the{" "}
        <Text style={{ color: theme.colors.secondary }}>Privacy policy</Text>.
      </Text>
    </TouchableOpacity>
  );
};

export default CheckboxPolicy;

const styles = StyleSheet.create({
  checkboxContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  label: {
    marginLeft: 20,
    marginRight: 24,
  },
});
