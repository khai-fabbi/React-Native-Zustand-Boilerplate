import {
  ExtendedTheme,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

interface IProps extends TouchableOpacityProps {}
const ButtonBack = ({ style, ...props }: IProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      {...props}
      onPress={() => navigation.goBack()}
    >
      <Icon type={IconType.Ionicons} name="chevron-back" />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

export default ButtonBack;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 8,
    },
    text: {
      color: colors.primary,
      fontWeight: "600",
      fontSize: 14,
    },
  });
  return styles;
};
