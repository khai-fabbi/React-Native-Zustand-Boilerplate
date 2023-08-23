import { View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo } from "react";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useTheme } from "@react-navigation/native";
import createStyles from "./Header.style";
import { InputBase } from "@shared-components/input";
import { SearchIcon } from "@shared-components/icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const profileURI =
  // eslint-disable-next-line max-len
  "https://scontent.fhan12-1.fna.fbcdn.net/v/t1.6435-1/132267878_2874885312781290_4842640170759273147_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e__Bm1yoa3wAX_R2TYs&_nc_ht=scontent.fhan12-1.fna&oh=00_AfDiyCKtqnBSrO6dLLh45JEd4tWCJKEr4g8IZK9w9I6lNA&oe=650CF7C3";
const Header = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const progress = useSharedValue(0.5);
  const scale = useSharedValue(0.5);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        {
          rotate: `${progress.value * 2 * Math.PI}rad`,
        },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1, { mass: 30 }), 1);
    scale.value = withSpring(1);
  }, [progress, scale]);

  return (
    <View style={styles.header}>
      <Animated.View style={[reanimatedStyle]}>
        <Icon
          name="menu"
          type={IconType.Ionicons}
          color={colors.iconBlack}
          size={30}
        />
      </Animated.View>
      <View style={styles.inputWrapper}>
        <InputBase placeholder="Do fundrise now" style={styles.inputCustom} />
        <TouchableOpacity style={styles.btnSearch}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: profileURI }}
        style={styles.profilePicImageStyle}
      />
    </View>
  );
};

export default Header;
