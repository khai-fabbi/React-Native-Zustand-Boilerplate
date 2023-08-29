import React, { useMemo } from "react";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { SelectCountry } from "react-native-element-dropdown";
import { Text, View, StyleSheet } from "react-native";
import { COUNTRY_DATA } from "@shared-constants";

interface IProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeValue: (value: string) => void;
}

const DropdownCountry: React.FC<IProps> = ({
  label,
  value,
  placeholder,
  onChangeValue,
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createDropdownStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      {label && <Text style={styles.textLabel}>{label}</Text>}
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={{ width: 24, height: 24, borderRadius: 12 }}
        maxHeight={200}
        value={value}
        data={COUNTRY_DATA}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder={placeholder || "Select country"}
        searchPlaceholder="Search..."
        onChange={(item) => onChangeValue(item.value)}
      />
    </View>
  );
};

export default DropdownCountry;

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
      paddingVertical: 10,
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
  });
  return styles;
};
