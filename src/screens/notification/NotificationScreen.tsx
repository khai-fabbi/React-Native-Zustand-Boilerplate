import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./NotificationScreen.style";

interface NotificationScreenProps {}

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Detail Screen</Text>
    </View>
  );
};

export default NotificationScreen;
