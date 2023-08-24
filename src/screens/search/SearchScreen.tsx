import React, { useMemo } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import createStyles from "./SearchScreen.style";
import { Header, Pagination } from "@shared-components/common";
import { recentCampaignList } from "@screens/home/mockData";
import CardCampaign from "@screens/home/components/CardCampaign";

const { width } = Dimensions.get("screen");
interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const theme = useTheme();
  // const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <View>
          <ImageBackground
            borderRadius={15}
            resizeMode="cover"
            style={styles.titleBg}
            source={{
              // eslint-disable-next-line max-len
              uri: "https://images.unsplash.com/photo-1692600996337-7feb8ecdcbf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            }}
          >
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>Education</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.textResult}>524 Projects Found</Text>
          <View />
        </View>
        <FlatList
          style={{ width, alignSelf: "center" }}
          contentContainerStyle={{ paddingLeft: 24, paddingBottom: 4 }}
          showsHorizontalScrollIndicator={false}
          data={recentCampaignList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CardCampaign
              cardInfo={item}
              style={{ width: 280, marginRight: 24 }}
            />
          )}
          snapToOffsets={new Array(recentCampaignList.length)
            .fill(0)
            .map((_, index) => (index ? 280 * index + 24 * index : 0))}
          decelerationRate={"fast"}
          horizontal
          pagingEnabled
        />
        <Pagination count={5} page={1} style={{ marginVertical: 30 }} />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
