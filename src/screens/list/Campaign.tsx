import React, { useMemo } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import createStyles from "./Campaign.style";
import Header from "@shared-components/common/Header";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonBase } from "@shared-components/button";
import { PlusIcon } from "@shared-components/icons";
import CardCampaign from "@screens/home/components/CardCampaign";
import { yourCampaignList } from "./mock/MockData";
import { SCREENS } from "@shared-constants";

interface CampaignProps {}

const Campaign: React.FC<CampaignProps> = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const handleNavigate = () => navigation.navigate(SCREENS.CREATE_CAMPAIGN);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.createCampaignBox}>
          <TouchableOpacity
            style={styles.iconPlusWrapper}
            onPress={handleNavigate}
          >
            <PlusIcon />
          </TouchableOpacity>
          <View style={styles.createCampaignBoxRight}>
            <Text style={styles.textTitle}>Create Your Campaign</Text>
            <Text style={styles.textDescription}>
              Jump right into our editor and create your first Virtue campaign!
            </Text>
            <TouchableOpacity>
              <Text style={styles.textHelp}>Need any help? Learn More...</Text>
            </TouchableOpacity>

            <ButtonBase
              title="Create Campaign"
              style={styles.customButtonSecondary}
              textStyle={{ color: colors.secondary }}
              onPress={handleNavigate}
            />
          </View>
        </View>

        <View>
          <Text style={styles.title}>
            Your Campaign <Text style={{ color: colors.secondary }}>(4)</Text>
          </Text>
          <FlatList
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingBottom: 4, rowGap: 20 }}
            data={yourCampaignList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <CardCampaign
                style={{ shadowColor: colors.transparent }}
                cardInfo={item}
                isMyCard={true}
              />
            )}
            decelerationRate={"fast"}
            pagingEnabled
          />
          <ButtonBase
            title="See more+"
            style={[styles.customButtonSecondary, { alignSelf: "center" }]}
            textStyle={{ color: colors.secondary }}
          />
        </View>

        <View>
          <Text style={styles.title}>
            Pending Campaign{" "}
            <Text style={{ color: colors.secondary }}>(5)</Text>
          </Text>
          <FlatList
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingBottom: 4, rowGap: 20 }}
            data={yourCampaignList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <CardCampaign
                style={{ shadowColor: colors.transparent }}
                cardInfo={item}
                isMyCard={true}
              />
            )}
            decelerationRate={"fast"}
            pagingEnabled
          />
          <ButtonBase
            title="See more+"
            style={[styles.customButtonSecondary, { alignSelf: "center" }]}
            textStyle={{ color: colors.secondary }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Campaign;
