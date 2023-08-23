import React, { useMemo } from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import Header from "@shared-components/common/Header";
import { CardYourCampaign } from "./components";
import CardCampaign from "./components/CardCampaign";
const { width } = Dimensions.get("screen");

interface HomeScreenProps {}
const snapToOffsetArr = [1, 2, 3, 4, 5, 6, 7, 8];
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  // const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <CardYourCampaign />
        <View>
          <Text style={styles.title}>Popular Campaign </Text>
          <FlatList
            style={{ width, alignSelf: "center", marginTop: 20 }}
            contentContainerStyle={{ paddingLeft: 24, paddingBottom: 4 }}
            showsHorizontalScrollIndicator={false}
            data={snapToOffsetArr}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(_) => (
              <CardCampaign style={{ width: 280, marginRight: 24 }} />
            )}
            snapToOffsets={snapToOffsetArr.map((_, index) =>
              index ? 280 * index + 24 * index : 0,
            )}
            decelerationRate={"fast"}
            horizontal
            pagingEnabled
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
