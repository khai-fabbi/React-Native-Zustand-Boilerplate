import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import React, { useMemo } from "react";
import { useTheme, ExtendedTheme } from "@react-navigation/native";
import { ArrowLeftIcon, ArrowRightIcon } from "@shared-components/icons";

interface IProps extends ViewProps {
  defaultPage?: number;
  count: number;
  page?: number;
  onChange?: () => void;
  disabled?: boolean;
}
const Pagination = ({
  style,
  count,
  defaultPage = 1,
  page,
  ...props
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const totalPage = useMemo(
    () => Array.from({ length: count }, (_, i) => i + 1),
    [count],
  );
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
      >
        <TouchableOpacity style={[styles.paginationItem]}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        {totalPage.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.paginationItem,
              item === (page || defaultPage) && styles.paginationItemActive,
            ]}
          >
            <Text
              style={[
                styles.paginationText,
                item === (page || defaultPage) && {
                  color: theme.colors.white,
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.paginationItem}>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    paginationItem: {
      width: 28,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 8,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    paginationItemActive: {
      backgroundColor: colors.secondary,
    },
    paginationText: {
      color: colors.text3,
      fontWeight: "600",
    },
  });
  return styles;
};
