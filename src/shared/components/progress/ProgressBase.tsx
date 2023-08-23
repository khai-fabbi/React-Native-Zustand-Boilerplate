import { InteractionManager, StyleSheet, View, ViewProps } from "react-native";
import React, { useEffect, useMemo } from "react";
import { useTheme, ExtendedTheme } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface IProps extends ViewProps {
  progress?: number;
  isAnimation?: boolean;
}
const ProgressBase = ({
  style,
  progress = 0,
  isAnimation = false,
  ...props
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const anim = useSharedValue(isAnimation ? 0 : progress);

  useEffect(() => {
    if (!isAnimation) return;
    const interactionPromise = InteractionManager.runAfterInteractions(() => {
      anim.value = withTiming(progress, { duration: 500 });
    });
    return () => {
      interactionPromise.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styleProgressAni = useAnimatedStyle(() => {
    return { width: `${anim.value * 100}%` };
  }, []);
  return (
    <View style={[styles.progressBar, style]} {...props}>
      <Animated.View style={[styles.progress, styleProgressAni]} />
    </View>
  );
};

export default ProgressBase;

const createStyles = (theme: ExtendedTheme) => {
  const styles = StyleSheet.create({
    progressBar: {
      width: "100%",
      borderRadius: 9999,
      backgroundColor: theme.colors.bgProgress,
      height: 6,
    },
    progress: {
      height: "100%",
      borderRadius: 9999,
      backgroundColor: theme.colors.primary,
    },
  });
  return styles;
};
