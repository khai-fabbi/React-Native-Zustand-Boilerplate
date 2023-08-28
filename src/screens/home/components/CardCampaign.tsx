import { View, Text, StyleSheet, Image, ViewProps } from "react-native";
import React, { useMemo } from "react";
import { FolderIcon } from "@shared-components/icons";
import { useTheme, ExtendedTheme } from "@react-navigation/native";
import { ProgressBase } from "@shared-components/progress";
import { CardInfo } from "@services/models";

interface IProps extends ViewProps {
  isMyCard?: boolean;
  cardInfo: CardInfo;
}
const CardCampaign = ({
  style,
  cardInfo,
  isMyCard = false,
  ...props
}: IProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <Image
        style={styles.imageYourCampaign}
        alt="Image"
        source={{
          uri: cardInfo.image,
        }}
      />
      <View
        style={[styles.contentWrapper, isMyCard && { paddingHorizontal: 0 }]}
      >
        <View style={styles.nameCategory}>
          <FolderIcon />
          <Text style={styles.nameDetailCategory}>{cardInfo.categoryName}</Text>
        </View>
        <Text style={styles.nameCampaingn}>{cardInfo.title}</Text>
        <Text style={styles.description}>{cardInfo.description}</Text>

        <ProgressBase
          progress={cardInfo.progress}
          style={{ marginVertical: 16 }}
        />
        <View style={styles.info}>
          <View style={[{ flex: 1 }]}>
            <Text style={styles.textInfoItem}>{cardInfo.raised}</Text>
            <Text style={styles.textInfoDescription}>Raised of $2,500</Text>
          </View>
          <View>
            <Text style={styles.textInfoItem}>{cardInfo.totalBacker}</Text>
            <Text style={styles.textInfoDescription}>Total backers</Text>
          </View>

          {isMyCard && (
            <View>
              <Text style={styles.textInfoItem}>{cardInfo?.dayLeft}</Text>
              <Text style={styles.textInfoDescription}>Days left</Text>
            </View>
          )}
        </View>
        {!isMyCard && (
          <View style={styles.authorBox}>
            <Image
              style={styles.authorImg}
              resizeMode="cover"
              source={{
                uri: cardInfo.author?.image,
              }}
            />
            <Text style={styles.authorName}>
              <Text style={{ color: colors.text3 }}>by</Text>{" "}
              {cardInfo.author?.name}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CardCampaign;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
      borderRadius: 15,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    contentWrapper: {
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    imageYourCampaign: {
      width: "100%",
      height: 200,
      borderRadius: 15,
    },
    nameCategory: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
    },
    nameDetailCategory: {
      color: colors.text3,
      fontSize: 14,
      fontWeight: "500",
    },
    nameCampaingn: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 26,
    },
    description: {
      marginTop: 10,
      color: colors.text3,
      fontSize: 12,
      lineHeight: 18,
    },
    info: {
      flexDirection: "row",
      columnGap: 30,
    },
    textInfoItem: {
      color: colors.text2,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 26,
    },
    textInfoDescription: {
      color: colors.text4,
      fontSize: 14,
      lineHeight: 22,
    },
    authorBox: {
      marginTop: 15,
      flexDirection: "row",
      columnGap: 7,
      alignItems: "center",
    },
    authorImg: {
      width: 30,
      aspectRatio: 1,
      borderRadius: 9999,
    },
    authorName: {
      fontSize: 12,
      fontWeight: "600",
      color: colors.text2,
    },
  });
  return styles;
};
