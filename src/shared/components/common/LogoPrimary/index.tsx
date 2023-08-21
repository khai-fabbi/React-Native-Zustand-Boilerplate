import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { LogoIcon } from "@shared-components/icons";
import { scale } from "@theme/scale";

interface LogoPrimaryProps {
  containerStyle?: ViewStyle;
}
const LogoPrimary = ({ containerStyle }: LogoPrimaryProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <LogoIcon />
    </View>
  );
};

export default LogoPrimary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(52),
    aspectRatio: 1,
    backgroundColor: "#2C2F32",
    borderRadius: 10,
  },
});
