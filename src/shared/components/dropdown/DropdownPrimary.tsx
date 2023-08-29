import React, { useMemo } from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";
import { DropDownItem } from "@services/models";

interface IProps {
  label?: string;
  value: string;
  options: DropDownItem[];
  onChangeValue: (item: DropDownItem) => void;
  style?: ViewStyle;
  placeholder?: string;
}

const DropdownPrimary = ({
  style,
  value,
  options,
  onChangeValue,
  placeholder = "",
  label,
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createDropdownStyles(theme), [theme]);

  const renderItem = (item: DropDownItem) => {
    return (
      <View style={[styles.dropdownItem, style]}>
        <CheckBox
          value={item.value === value}
          onTintColor={theme.colors.primary}
          onFillColor={theme.colors.primary}
          onCheckColor={theme.colors.white}
          style={styles.checkbox}
          boxType="square"
        />
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.textLabel}>{label}</Text>}
      <Dropdown
        style={styles.dropdown}
        containerStyle={{ borderRadius: 5, overflow: "hidden", padding: 0 }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={options}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder || "Select item"}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChangeValue}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropdownPrimary;

const createDropdownStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      rowGap: 10,
      margin: 4,
    },
    textLabel: {
      color: colors.text2,
      fontWeight: "500",
    },
    dropdown: {
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
    checkbox: {
      marginRight: 10,
      height: 16,
      width: 16,
      borderRadius: 10,
    },
    dropdownItem: {
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: 12,
      fontWeight: "500",
      color: colors.text3,
    },
    placeholderStyle: {
      margin: 0,
      fontSize: 14,
      fontWeight: "500",
      color: colors.text4,
    },
    selectedTextStyle: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.text,
    },
    // iconStyle: {
    //   width: 20,
    //   height: 20,
    // },
    inputSearchStyle: {
      height: 40,
      fontSize: 14,
      borderRadius: 5,
    },
  });
  return styles;
};
