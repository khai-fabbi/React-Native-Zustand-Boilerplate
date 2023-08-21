import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./ListCard.style";
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import Header from "@shared-components/common/Header";

interface ListCardProps {}

const ListCard: React.FC<ListCardProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Content = () => (
    <View style={styles.contentContainer}>
      <Text h1 bold color={colors.text}>
        Hello Quang Khai
      </Text>
      <Text
        fontFamily={fonts.montserrat.lightItalic}
        color={colors.placeholder}
      >
        Welcome Back
      </Text>

      {/* list */}
      <View style={styles.listContainer}>
        <FlatList
          data={MockData}
          renderItem={({ item }) => (
            <CardItem data={item} onPress={handleItemPress} />
          )}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  );
};

export default ListCard;
