import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import LogoPrimary from "../LogoPrimary";
import styles from "./HeaderSecondary.style";
const profileURI =
  // eslint-disable-next-line max-len
  "https://scontent.fhan12-1.fna.fbcdn.net/v/t1.6435-1/132267878_2874885312781290_4842640170759273147_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e__Bm1yoa3wAX_R2TYs&_nc_ht=scontent.fhan12-1.fna&oh=00_AfDiyCKtqnBSrO6dLLh45JEd4tWCJKEr4g8IZK9w9I6lNA&oe=650CF7C3";

const HeaderSecondary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <LogoPrimary containerStyle={{ width: 40 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.PROFILE)}>
        <Image
          resizeMode="cover"
          source={{ uri: profileURI }}
          style={styles.profilePicImageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSecondary;
