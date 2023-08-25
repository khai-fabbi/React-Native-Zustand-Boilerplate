import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { EditIcon } from "@shared-components/icons";

interface IProps {
  onPress?: () => void;
}
const ButtonEditProfile = ({ onPress }: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={styles.btnEdit} onPress={onPress}>
      <EditIcon />
      <Text style={styles.btnText}>Edit</Text>
    </TouchableOpacity>
  );
};

export default ButtonEditProfile;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    btnEdit: {
      flexDirection: "row",
      columnGap: 5,
      alignItems: "center",
      paddingVertical: 6,
    },
    btnText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.secondary,
    },
  });
  return styles;
};
