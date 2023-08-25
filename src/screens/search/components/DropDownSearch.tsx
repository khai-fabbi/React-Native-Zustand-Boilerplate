import React, { useMemo } from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";
import { DropDownItem } from "@services/models";

interface IProps {
  value: string;
  options: DropDownItem[];
  onChangeValue: (item: DropDownItem) => void;
  style?: ViewStyle;
}

const DropdownSearch = ({ style, value, options, onChangeValue }: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

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
    <Dropdown
      style={styles.dropdown}
      containerStyle={{ borderRadius: 5, overflow: "hidden" }}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={options}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={onChangeValue}
      renderItem={renderItem}
    />
  );
};

export default DropdownSearch;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    dropdown: {
      backgroundColor: colors.white,
      minWidth: 120,
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 4,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
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
      fontSize: 14,
      fontWeight: "600",
      color: colors.text3,
    },
    selectedTextStyle: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text2,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 14,
    },
  });
  return styles;
};
