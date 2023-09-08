/* eslint-disable max-len */
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import createStyles from "./DetailScreen.style";
import { Header } from "@shared-components/common";
import { FolderIcon } from "@shared-components/icons";
import { ProgressBase } from "@shared-components/progress";
import { ButtonBase } from "@shared-components/button";
import CardCampaign from "@screens/home/components/CardCampaign";
import { recentCampaignList } from "@screens/home/mockData";
import { InputBase } from "@shared-components/input";
import { FeatureCard } from "./components";
import { cardInfo, featureListMock } from "./mock";
import { ModalBase } from "@shared-components/modal";
import { SCREENS } from "@shared-constants";

const NAV_DESCRIPTION_LIST = [
  "Campaign",
  "Risks",
  "FAQ",
  "Updates",
  "Comments",
];

const { width } = Dimensions.get("screen");

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [focus, setFocus] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onViewableItemsChanged = (info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    setFocus(info.viewableItems[0].index ?? 0);
  };

  const [navActive, setNavActive] = useState(NAV_DESCRIPTION_LIST[0]);

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <View>
          <ImageBackground
            borderRadius={15}
            resizeMode="cover"
            style={styles.titleBg}
            source={{
              uri: "https://images.unsplash.com/photo-1692600996337-7feb8ecdcbf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            }}
          >
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>Education</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <FlatList
            data={cardInfo.images}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            style={{ borderRadius: 15, overflow: "hidden" }}
            renderItem={({ item }) => (
              <View style={styles.imgSlideWrapper}>
                <Image
                  resizeMode="cover"
                  style={styles.imgSlide}
                  source={{
                    uri: item,
                  }}
                />
              </View>
            )}
            horizontal
            pagingEnabled
            // viewabilityConfig={{ viewAreaCoveragePercentThreshold: 500 }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
          />
          <View style={styles.pagination}>
            {cardInfo.images.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.paginationItem,
                  focus === idx && {
                    backgroundColor: colors.text3,
                    opacity: 1,
                  },
                ]}
              />
            ))}
          </View>

          <View style={[styles.contentWrapper]}>
            <View style={styles.categoryContainer}>
              <View style={styles.nameCategory}>
                <FolderIcon />
                <Text style={styles.nameDetailCategory}>
                  {cardInfo.categoryName}
                </Text>
              </View>
              <View style={styles.iconShareWrapper}>
                <TouchableOpacity>
                  <Icon
                    type={IconType.Ionicons}
                    color={colors.text3}
                    name="logo-facebook"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    type={IconType.Ionicons}
                    color={colors.text3}
                    name="logo-twitter"
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    type={IconType.FontAwesome}
                    color={colors.text3}
                    name="share-square"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.nameCampaingn}>{cardInfo.title}</Text>
            <Text style={styles.description}>{cardInfo.description}</Text>

            <View style={styles.authorBox}>
              <Image
                style={styles.authorImg}
                resizeMode="cover"
                source={{
                  uri: cardInfo.author?.image,
                }}
              />
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 16,
                  }}
                >
                  <Text style={styles.authorName}>{cardInfo.author?.name}</Text>
                  <View style={{ flexDirection: "row", columnGap: 5 }}>
                    {new Array(cardInfo.author.star).fill(0).map((_, idx) => (
                      <Icon
                        key={idx}
                        type={IconType.AntDesign}
                        size={13}
                        color="#F5A623"
                        name="star"
                      />
                    ))}
                  </View>
                </View>
                <View style={{ marginTop: 4 }}>
                  <Text style={styles.textAuthorLocation}>
                    <Text
                      style={styles.textTotalCampaign}
                    >{`${cardInfo.author.totalCampaign} Campaign`}</Text>
                    {"  "}
                    <View
                      style={{
                        width: 6,
                        height: 6,
                        backgroundColor: colors.text3,
                        borderRadius: 9999,
                      }}
                    />
                    {"  "}
                    {cardInfo.author.location}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <View style={[{ flex: 1 }]}>
                <Text style={styles.textInfoItem}>{cardInfo.raised}</Text>
                <Text style={styles.textInfoDescription}>Raised of $2,500</Text>
              </View>
              <View>
                <Text style={styles.textInfoItem}>{cardInfo.totalBacker}</Text>
                <Text style={styles.textInfoDescription}>Total backers</Text>
              </View>

              <View>
                <Text style={styles.textInfoItem}>{cardInfo?.dayLeft}</Text>
                <Text style={styles.textInfoDescription}>Days left</Text>
              </View>
            </View>
            <ProgressBase
              progress={cardInfo.progress}
              style={{ marginVertical: 16 }}
            />
            <ButtonBase
              onPress={() => setIsOpenModal(true)}
              title="Back this project"
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
        <View style={styles.campaignDescriptionWrapper}>
          <View style={styles.navWrapper}>
            {NAV_DESCRIPTION_LIST.map((name, idx) => (
              <TouchableOpacity key={idx} onPress={() => setNavActive(name)}>
                <Text
                  style={[
                    styles.navItem,
                    navActive === name && { color: colors.secondary },
                  ]}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>STORY</Text>
            <View style={styles.descriptionContent}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                }}
                borderRadius={6}
                resizeMode="cover"
                style={{ width: "100%", height: 216 }}
              />
              <Text style={styles.descriptionText}>
                Capture everything in 4k, with extended battery life and
                pro-inspired features. Choose from three 4k recording modes:
                UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect and
                stream your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5 inch touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.{" "}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.descriptionTitle}>Support</Text>
            <View style={styles.supportBox}>
              <Text style={styles.textTitleSupport}>Pledge without reward</Text>
              <InputBase
                placeholder="$10"
                style={{
                  marginTop: 25,
                  borderColor: colors.primary80,
                  borderWidth: 1,
                  shadowColor: colors.transparent,
                }}
                keyboardType="numeric"
              />
              <View style={styles.descriptionSupportBox}>
                <Text
                  style={{
                    color: colors.text2,
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  Back it because you believe in it.
                </Text>
                <Text
                  style={{ marginTop: 10, color: colors.text3, lineHeight: 18 }}
                >
                  Support the project for no reward, just because it speaks to
                  you.
                </Text>
              </View>
              <ButtonBase
                style={{ marginTop: 15, backgroundColor: colors.secondary }}
                title="Continue"
              />
            </View>
          </View>
          <View>
            {featureListMock.map((item) => (
              <FeatureCard
                key={item.id}
                cardInfo={item}
                style={{ marginTop: 30 }}
              />
            ))}
          </View>
        </View>

        {/* suggestion */}
        <View>
          <Text style={styles.titleSuggestion}>
            You also may be interested in
          </Text>
          <FlatList
            style={{ width, alignSelf: "center", marginTop: 20 }}
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
        </View>
      </View>

      <ModalBase
        isVisible={isOpenModal}
        onCloseModal={() => setIsOpenModal(false)}
        title="Back this project"
      >
        <View>
          <View style={{ rowGap: 10 }}>
            <InputBase
              label="Enter the contribute amount"
              placeholder="$0.00"
              keyboardType="numeric"
              helpText="Contribution are not associatied with perks"
            />
            <ButtonBase
              title="Continue"
              style={{ alignSelf: "flex-start", width: 162 }}
              onPress={() => {
                navigation.navigate(SCREENS.CHECKOUT);
                setIsOpenModal(false);
              }}
            />
          </View>
          <View>
            {featureListMock.map((item) => (
              <View key={item.id}>
                <FeatureCard cardInfo={item} style={{ marginTop: 30 }} />
                <ButtonBase
                  title="Get this Perk"
                  style={{ marginTop: 15, backgroundColor: colors.secondary }}
                />
              </View>
            ))}
          </View>
        </View>
      </ModalBase>
    </ScrollView>
  );
};

export default DetailScreen;
